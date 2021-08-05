import { ActionType, ITodo } from '../action-type'

export const addTodoCreate = (todo: ITodo) => {
  return { type: ActionType.ADD_TODO, payload: todo }
}

export const editTodoCreate = (todo: ITodo) => {
  return { type: ActionType.EDIT_TODO, payload: todo }
}

export const delTodoCreate = (id: number) => {
  return { type: ActionType.DELETE_TODO, payload: id }
}

export const completedTodoCreate = (id: number) => {
  return { type: ActionType.COMPLETED_TODO, payload: id }
}
