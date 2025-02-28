export const TEAM_PROPS = {
  ID: '_id',
  NAME: 'name',
  MEMBERS: 'members'
}

export const MEMBER_PROPS = {
  ID: '_id',
  NAME: 'name',
  TODO_LIST: 'todoList'
}

export const TODO_PROPS = {
  ID: '_id',
  CONTENTS: 'contents',
  PRIORITY: 'priority',
  IS_COMPLETED: 'isCompleted'
}

export const FILTER_PROPS = {
  ID: '_id',
  FILTER: 'filter'
}

export const PRIORITY = {
  FIRST: { key: 'FIRST', class: 'primary', value: '1' },
  SECOND: { key: 'SECOND', class: 'secondary', value: '2' },
  NONE: { key: 'NONE', class: '', value: '0' }
}

export const PRIORITY_SORT = {
  FIRST: 1,
  SECOND: 2,
  NONE: 3
}
