export interface ITodo {
    id: string
    header: string
    author: string
    body: string
    selected: boolean
    completed: boolean
}

export interface ITodoState {
  dataTodo: {
    [key: string] : ITodo
  }
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

export type TAction =
  | IAddTodoAction
  | IDeleteTodoAction
  | IEditTodoAction
  | ICompletedTodoAction
