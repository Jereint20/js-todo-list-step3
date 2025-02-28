import URL from '../constants/URL.js'
import { MEMBER_PROPS, TEAM_PROPS, TODO_PROPS } from '../constants/PROPERTIES.js'

const fetchOptions = {
  async GET_DATA (url) {
    const response = await fetch(url)
    return await response.json()
  },
  async POST_DATA (url, data) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    return await response.json()
  },
  async DELETE_DATA (url) {
    const response = await fetch(url, {
      method: 'DELETE'
    })
    return await response.json()
  },
  async PUT_DATA (url, data = null) {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: data && JSON.stringify(data)
    })
    return await response.json()
  }
}

const API = {
  getTeams: async () => await fetchOptions.GET_DATA(URL.GET_TEAMS()),
  addNewTeam: async (teamName) => await fetchOptions.POST_DATA(URL.POST_TEAM(), { [TEAM_PROPS.NAME]: teamName }),
  getTeam: async (teamId) => await fetchOptions.GET_DATA(URL.GET_TEAM(teamId)),
  addNewMember: async (memberName, teamId) => await fetchOptions.POST_DATA(URL.POST_MEMBER(teamId), { [MEMBER_PROPS.NAME]: memberName }),
  addNewTodo: async (newTodo, teamId, memberId) => await fetchOptions.POST_DATA(URL.POST_TODO(teamId, memberId), { [TODO_PROPS.CONTENTS]: newTodo }),
  deleteTodo: async (teamId, memberId, itemId) => await fetchOptions.DELETE_DATA(URL.DELETE_TODO(teamId, memberId, itemId)),
  toggleTodo: async (teamId, memberId, itemId) => await fetchOptions.PUT_DATA(URL.TOGGLE_TODO(teamId, memberId, itemId)),
  editTodo: async (editTodo, teamId, memberId, itemId) => await fetchOptions.PUT_DATA(URL.EDIT_TODO(teamId, memberId, itemId), { [TODO_PROPS.CONTENTS]: editTodo }),
  changePriorityTodo: async (priority, teamId, memberId, itemId) => await fetchOptions.PUT_DATA(URL.CHANGE_PRIORITY_TODO(teamId, memberId, itemId), { priority }),
  deleteTodoList: async (teamId, memberId) => await fetchOptions.DELETE_DATA(URL.DELETE_TODO_LIST(teamId, memberId))
}

export default API
