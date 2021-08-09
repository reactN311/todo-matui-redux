export interface ITodo {
  id: string
  header: string
  author: string
  body: string
  selected: boolean
  completed: boolean
}

export type TypeFormAction = 'save' | 'edit' | 'none'

export interface ITodoState {
  dataTodo: {
    [key: string]: ITodo
  }
  dataForm: {
    data: ITodo
    title: string
    type: TypeFormAction
  }
  showDialog: boolean
}

export enum ActionType {
  ADD_TODO = 'ADD_TODO',
  DELETE_TODO = 'DELETE_TODO',
  EDIT_TODO = 'EDIT_TODO',
  COMPLETED_TODO = 'COMPLETED_TODO',
}

export interface IAddTodoAction {
  type: ActionType.ADD_TODO
  payload: ITodo
}

export interface IDeleteTodoAction {
  type: ActionType.DELETE_TODO
  payload: string
}

export interface IEditTodoAction {
  type: ActionType.EDIT_TODO
  payload: ITodo
}

export interface ICompletedTodoAction {
  type: ActionType.COMPLETED_TODO
  payload: string // id
}

/// For Form Dialog
export enum ActionForm {
  ADD_TODO_FORM = 'ADD_TODO_FORM',
  EMPTY_TODO_FORM = 'EMPTY_TODO_FORM',
  SET_TITLE_TODO_FORM = 'SET_TITLE_TODO_FORM',
  SET_TYPE_TODO_FORM = 'SET_TYPE_TODO_FORM',
  SHOW_TODO_FORM = 'SHOW_TODO_FORM',
}

export interface IAddToFormAction {
  type: ActionForm.ADD_TODO_FORM
  payload: ITodo
}

export interface IEmptyFormAction {
  type: ActionForm.EMPTY_TODO_FORM
}

export interface ISetTitleFormAction {
  type: ActionForm.SET_TITLE_TODO_FORM
  payload: string // 'save' | 'edit'
}

export interface ISetTypeFormAction {
  type: ActionForm.SET_TYPE_TODO_FORM
  payload: TypeFormAction // 'save' | 'edit'
}

export interface IShowFormAction {
  type: ActionForm.SHOW_TODO_FORM
  payload: boolean // open || close
}

export interface IStateForm {
  header: string
  author: string
  body: string
}

export type TAction =
  | IAddTodoAction
  | IDeleteTodoAction
  | IEditTodoAction
  | ICompletedTodoAction
  | IAddToFormAction
  | IEmptyFormAction
  | ISetTitleFormAction
  | ISetTypeFormAction
  | IShowFormAction
