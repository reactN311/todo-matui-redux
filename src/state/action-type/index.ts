export interface ITodo {
  id: number
  header: string | null
  body: string | null
  selected: boolean
  completed: boolean
}
export interface ITodoState {
  dataTodo: ITodo[]
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
  payload: number
}
export interface IEditTodoAction {
  type: ActionType.EDIT_TODO
  payload: ITodo
}
export interface ICompletedTodoAction {
  type: ActionType.COMPLETED_TODO
  payload: number // id
}

export type TAction =
  | IAddTodoAction
  | IDeleteTodoAction
  | IEditTodoAction
  | ICompletedTodoAction
