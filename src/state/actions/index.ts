import {
  ActionType,
  ActionForm,
  IAddTodoAction,
  IAddToFormAction,
  ICompletedTodoAction,
  IDeleteTodoAction,
  IEditTodoAction,
  IEmptyFormAction,
  ITodo,
  ISetTypeFormAction,
  TypeFormAction,
  ISetTitleFormAction,
  IShowFormAction,
} from '../action-type'

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

//For Form

export const addForm = (todo: ITodo): IAddToFormAction => {
  return { type: ActionForm.ADD_TODO_FORM, payload: todo }
}

export const clearForm = (): IEmptyFormAction => {
  return { type: ActionForm.EMPTY_TODO_FORM }
}

export const setTitleForm = (caption: string): ISetTitleFormAction => {
  return { type: ActionForm.SET_TITLE_TODO_FORM, payload: caption }
}

export const setTypeForm = (type: TypeFormAction): ISetTypeFormAction => {
  return { type: ActionForm.SET_TYPE_TODO_FORM, payload: type }
}

export const showDiagForm = (show: boolean): IShowFormAction => {
  return { type: ActionForm.SHOW_TODO_FORM, payload: show }
}
