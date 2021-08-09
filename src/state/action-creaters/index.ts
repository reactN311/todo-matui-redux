import { Dispatch } from 'redux'
import {
  addForm,
  addTodoCreate,
  clearForm,
  completedTodoCreate,
  delTodoCreate,
  editTodoCreate,
  setTitleForm,
  setTypeForm,
  showDiagForm,
} from '../actions'

import {
  ActionType,
  IAddToFormAction,
  IEmptyFormAction,
  ISetTitleFormAction,
  ISetTypeFormAction,
  IShowFormAction,
  ITodo,
  TypeFormAction,
} from '../action-type'

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

export const addTodo = (todo: ITodo) => (
  dispatch: Dispatch<IAddTodoCreateAction>,
) => {
  dispatch(addTodoCreate(todo))
}

export const addTodoWith = (todo: ITodo) => (
  dispatch: Dispatch<IAddTodoCreateAction>,
) => {
  return dispatch(addTodoCreate(todo))
}

export const editTodo = (todo: ITodo) => (
  dispatch: Dispatch<IEditTodoCreate>,
) => {
  return dispatch(editTodoCreate(todo))
}

export const delTodo = (id: string) => (dispatch: Dispatch<IDelTodoCreate>) => {
  return dispatch(delTodoCreate(id))
}

export const completedTodo = (id: string) => (
  dispatch: Dispatch<ICompletedTodoCreate>,
) => {
  return dispatch(completedTodoCreate(id))
}
// For Form

export const addTodoToForm = (todo: ITodo) => (
  dispatch: Dispatch<IAddToFormAction>,
) => {
  return dispatch(addForm(todo))
}

export const clearTodoForm = () => (dispatch: Dispatch<IEmptyFormAction>) => {
  return dispatch(clearForm())
}

export const setTypeTodoForm = (type: TypeFormAction) => (
  dispatch: Dispatch<ISetTypeFormAction>,
) => {
  return dispatch(setTypeForm(type))
}
export const setTitleTodoForm = (type: string) => (
  dispatch: Dispatch<ISetTitleFormAction>,
) => {
  return dispatch(setTitleForm(type))
}

export const showTodoForm = (type: boolean) => (
  dispatch: Dispatch<IShowFormAction>,
) => {
  console.log('show 33', type)
  return dispatch(showDiagForm(type))
}
