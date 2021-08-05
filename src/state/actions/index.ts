import { Dispatch } from 'redux'
import {
  addTodoCreacter,
  completedTodoCreacter,
  delTodoCreacter,
  editTodoCreacter,
} from '../action-creaters'
import { ActionType, ITodo } from '../action-type'

interface addTodoCreacterAction {
  type: ActionType
  payload: ITodo
}
interface editTodoCreacter {
  type: ActionType
  payload: ITodo
}

interface delTodoCreacter {
  type: ActionType
  payload: number
}
interface completedTodoCreacter {
  type: ActionType
  payload: number
}

const addTodo = (todo: ITodo) => (
  dispatch: Dispatch<addTodoCreacterAction>,
) => {
  dispatch(addTodoCreacter(todo))
}

const editTodo = (todo: ITodo) => (dispatch: Dispatch<editTodoCreacter>) => {
  dispatch(editTodoCreacter(todo))
}

const delTodo = (id: number) => (dispatch: Dispatch<delTodoCreacter>) => {
  dispatch(delTodoCreacter(id))
}

const completedTodo = (id: number) => (
  dispatch: Dispatch<completedTodoCreacter>,
) => {
  dispatch(completedTodoCreacter(id))
}
