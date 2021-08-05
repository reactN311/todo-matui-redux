import { ActionType, ITodo, ITodoState, TAction } from '../action-type'

const initState: ITodoState = {
  dataTodo: [
    {
      id: 0,
      header: 'Brunch this weekend?',
      author: 'Mark',
      body: 'I\'ll be in your neighborhood doing errands this…',
      selected: false,
      completed: false,
    },
    {
      id: Date.now(),
      header: 'Summer BBQ',
      author: 'Scott, Alex, Jennifer',
      body: 'Wish I could come, but I\'m out of town this…',
      selected: false,
      completed: true,
    },{
      id: Date.now(),
      header: 'Oui Oui',
      author: 'Sandra Adams',
      body: 'Do you have Paris recommendations? Have you ever…',
      selected: false,
      completed: true,
    },
  ],
}

export const reducerTodos = (
  state: ITodoState = initState,
  action: TAction,
) => {
  switch (action.type) {
    case ActionType.ADD_TODO:
      const { header, author, body, selected, completed } = action.payload
      let newTodo: ITodo = { id: Date.now(), header, author, body, selected, completed }
      return { ...state, dataTodo: [newTodo, ...state.dataTodo] }
    case ActionType.EDIT_TODO:
      const elem = action.payload
      let editingTodo: ITodo[] = state.dataTodo.splice(elem.id, 1, elem)
      return { ...state, dataTodo: editingTodo }
    case ActionType.DELETE_TODO:
      const id = action.payload
      let delTodo: ITodo[] = state.dataTodo.filter((el) => el.id !== id)
      return { ...state, dataTodo: delTodo }
    case ActionType.COMPLETED_TODO:
      const compElId = action.payload //id
      const compEl = { ...state.dataTodo[compElId], completed: !completed }
      const compTodo: ITodo[] = state.dataTodo.splice(compElId, 1, compEl)
      return { ...state, dataTodo: compTodo }

    default:
      return state
  }
}

export default reducerTodos
