import {ActionType, IAddTodoAction, ICompletedTodoAction, IDeleteTodoAction, IEditTodoAction, ITodo} from '../action-type'

export const addTodoCreate = (todo: ITodo): IAddTodoAction => {
  return { type: ActionType.ADD_TODO, payload: todo }
}

export const editTodoCreate = (todo: ITodo): IEditTodoAction => {
  return { type: ActionType.EDIT_TODO, payload: todo }
}

export const delTodoCreate = (id: string): IDeleteTodoAction => {
  return { type: ActionType.DELETE_TODO, payload: id }
}

export const completedTodoCreate = (id: string): ICompletedTodoAction => {
  return { type: ActionType.COMPLETED_TODO, payload: id }
}
