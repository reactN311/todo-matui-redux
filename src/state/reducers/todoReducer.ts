import produce from 'immer'
import {
  ActionType,
  ActionForm,
  ITodo,
  ITodoState,
  TAction,
} from '../action-type'
// import { v4 as uuIdv4 } from 'uuid';

export const emptyForm = {
  id: '0',
  header: 'header reducer',
  author: 'author reducer',
  body: 'body reducer',
  selected: false,
  completed: false,
}

const initState: ITodoState = {
  dataTodo: {
    '0': {
      id: '0',
      header: 'Brunch this weekend?',
      author: 'Mark',
      body: "I'll be in your neighborhood doing errands this…",
      selected: false,
      completed: false,
    },
    '1': {
      id: '1',
      header: 'Summer BBQ',
      author: 'Scott, Alex, Jennifer',
      body: "Wish I could come, but I'm out of town this…",
      selected: false,
      completed: true,
    },
    '2': {
      id: '2',
      header: 'Oui Oui',
      author: 'Sandra Adams',
      body: 'Do you have Paris recommendations? Have you ever…',
      selected: false,
      completed: true,
    },
  },
  dataForm: {
    data: emptyForm,
    title: '',
    type: 'edit', // 'save' | 'edit'
  },
  showDialog: false,
}

export const reducerTodos = produce(
  (state: ITodoState = initState, action: TAction) => {
    switch (action.type) {
      case ActionType.ADD_TODO:
        const newId = randomId()
        const { header, author, body } = action.payload
        if (header.length < 2 && body.length < 2) return state

        const todo: ITodo = {
          id: newId,
          header,
          author,
          body,
          selected: false,
          completed: false,
        }
        state.dataTodo[newId] = todo
        return state
      case ActionType.EDIT_TODO:
        const { id } = action.payload
        const todoEdit: ITodo = {
          id,
          header: action.payload.header,
          author: action.payload.author,
          body: action.payload.body,
          selected: action.payload.selected,
          completed: action.payload.completed,
        }
        state.dataTodo[id] = todoEdit
        return state
      case ActionType.DELETE_TODO:
        let idToDel: string = action.payload
        delete state.dataTodo[idToDel]
        return state
      case ActionType.COMPLETED_TODO:
        state.dataTodo[action.payload].completed = !state.dataTodo[
          action.payload
        ].completed
        return state
      case ActionForm.ADD_TODO_FORM:
        state.dataForm.data = action.payload
        return state
      case ActionForm.EMPTY_TODO_FORM:
        state.dataForm.data = emptyForm
        return state
      case ActionForm.SET_TYPE_TODO_FORM:
        state.dataForm.type = action.payload
        return state
      case ActionForm.SET_TITLE_TODO_FORM:
        state.dataForm.title = action.payload
        return state
      case ActionForm.SHOW_TODO_FORM:
        state.showDialog = action.payload
        return state
      default:
        return state
    }
  },
)

const randomId = () => {
  return Math.random().toString(36).substr(2, 5)
}

export default reducerTodos
