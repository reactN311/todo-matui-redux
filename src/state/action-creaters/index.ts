import { Dispatch } from 'redux'
import {
  addTodoCreate,
  completedTodoCreate,
  delTodoCreate,
  editTodoCreate,
} from '../actions'

import {ActionType,  ITodo} from '../action-type'

export interface IAddTodoCreateAction {
  type: ActionType
  payload: ITodo
}
export interface IEditTodoCreate {
  type: ActionType
  payload: ITodo
}

export interface IDelTodoCreate {
  type: ActionType
  payload: string
}

export interface ICompletedTodoCreate {
  type: ActionType
  payload: string
}

export const addTodo = (todo: ITodo) => ( dispatch: Dispatch<IAddTodoCreateAction> ) => {
  dispatch(addTodoCreate(todo))
}

export const addTodoWith = (todo: ITodo) => ( dispatch: Dispatch<IAddTodoCreateAction> ) => {
  return  dispatch(addTodoCreate(todo))
}

export const editTodo = (todo: ITodo) => (dispatch: Dispatch<IEditTodoCreate>) => {
  return  dispatch(editTodoCreate(todo))
}

export const delTodo = (id: string) => (dispatch: Dispatch<IDelTodoCreate>) => {
  return  dispatch(delTodoCreate(id))
}

export const completedTodo = (id: string) => ( dispatch: Dispatch<ICompletedTodoCreate> ) => {
  return  dispatch(completedTodoCreate(id))
}
