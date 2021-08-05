import { ActionType, ITodo, ITodoState, TAction } from '../action-type'

const initState: ITodoState = {
  dataTodo: [
    {
      id: 0,
      header: 'def header',
      body: 'def body2',
      selected: false,
      completed: false,
    },
    {
      id: Date.now(),
      header: 'def header2',
      body: 'def body2',
      selected: false,
      completed: true,
    },
  ],
}

const reducerTodos = (state: ITodoState = initState, action: TAction) => {
  switch (action.type) {
    case ActionType.ADD_TODO:
      const { header, body, selected, completed } = action.payload
      let newTodo: ITodo = { id: Date.now(), header, body, selected, completed }
      return { ...state, dataTodo: [newTodo, ...state.dataTodo] }
    case ActionType.EDIT_TODO:
      const elem = action.payload
      let editingTodo: ITodo[] = state.dataTodo.slice().splice(elem.id, 1, elem)
      return { ...state, dataTodo: editingTodo }
    case ActionType.DELETE_TODO:
      const id = action.payload
      let delTodo: ITodo[] = state.dataTodo.filter((el) => el.id !== id)
      return { ...state, dataTodo: delTodo }
    case ActionType.COMPLETED_TODO:
      const compElId = action.payload //id
      const compEl = { ...state.dataTodo[compElId], completed: !completed }
      const compTodo: ITodo[] = state.dataTodo
        .slice()
        .splice(compElId, 1, compEl)
      return { ...state, dataTodo: compTodo }

    default:
      break
  }
}

export default reducerTodos
