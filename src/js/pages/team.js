import API from '../utils/Api.js'
import { teamListStore } from '../utils/Store.js'

import TeamList from '../components/team/TeamList.js'
import AddTeam from '../components/team/AddTeam.js'

const Team = () => {
  const updateTeams = async () => {
    const getTeams = await API.getTeams()
    teamListStore.setTeamList(getTeams)
  }

  const handleAddTeam = async () => {
    const result = prompt('팀 이름을 입력해주세요')
    await API.addNewTeam(result)
    await updateTeams()
  }

  const init = () => {
    TeamList()
    AddTeam({ onAdd: handleAddTeam })
    return updateTeams()
  }

  init()
}

Team()
