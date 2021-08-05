import { ActionType, ITodo } from '../action-type'

export const addTodoCreacter = (todo: ITodo) => {
  return { type: ActionType.ADD_TODO, payload: todo }
}

export const editTodoCreacter = (todo: ITodo) => {
  return { type: ActionType.EDIT_TODO, payload: todo }
}

export const delTodoCreacter = (id: number) => {
  return { type: ActionType.DELETE_TODO, payload: id }
}

export const completedTodoCreacter = (id: number) => {
  return { type: ActionType.COMPLETED_TODO, payload: id }
}
