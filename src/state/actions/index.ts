import { Dispatch } from 'redux'
import {
  addTodoCreate,
  completedTodoCreate,
  delTodoCreate,
  editTodoCreate,
} from '../action-creaters'
import { ActionType, ITodo } from '../action-type'

interface IAddTodoCreateAction {
  type: ActionType
  payload: ITodo
}
interface IEditTodoCreate {
  type: ActionType
  payload: ITodo
}

interface IDelTodoCreate {
  type: ActionType
  payload: number
}

interface ICompletedTodoCreate {
  type: ActionType
  payload: number
}

export const addTodo = (todo: ITodo) => (
  dispatch: Dispatch<IAddTodoCreateAction>,
) => {
  dispatch(addTodoCreate(todo))
}

export const editTodo = (todo: ITodo) => (dispatch: Dispatch<IEditTodoCreate>) => {
  dispatch(editTodoCreate(todo))
}

export const delTodo = (id: number) => (dispatch: Dispatch<IDelTodoCreate>) => {
  dispatch(delTodoCreate(id))
}

export const completedTodo = (id: number) => (
  dispatch: Dispatch<ICompletedTodoCreate>,
) => {
  dispatch(completedTodoCreate(id))
}
