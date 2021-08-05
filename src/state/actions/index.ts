import {
  addTodoCreacter,
  completedTodoCreacter,
  delTodoCreacter,
  editTodoCreacter,
} from '../action-creaters'
import { ITodo } from '../action-type'

const addTodo = (todo: ITodo) => {
  return (dispatch: any) => dispatch(addTodoCreacter(todo))
}

const editTodo = (todo: ITodo) => {
  return (dispatch: any) => dispatch(editTodoCreacter(todo))
}

const delTodo = (id: number) => {
  return (dispatch: any) => dispatch(delTodoCreacter(id))
}

const completedTodo = (id: number) => {
  return (dispatch: any) => dispatch(completedTodoCreacter(id))
}
