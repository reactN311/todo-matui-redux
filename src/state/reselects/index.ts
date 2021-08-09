import { createSelector } from 'reselect'
import { ITodoState } from '../action-type'

const todoSelector = (state: any) => state.todos

export const dataSelector = createSelector(
  [todoSelector],
  (todoState: ITodoState) => {
    return todoState.dataTodo
  },
)

//For Form
export const dataFormSelector = createSelector(
  [todoSelector],
  (todoState: ITodoState) => {
    // let dF = todoState.dataForm.data
    // console.log({ dF })
    return todoState.dataForm.data
  },
)

export const typeFormSelector = createSelector(
  [todoSelector],
  (todoState: ITodoState) => {
    // let tF = todoState.dataForm.type
    // console.log({ tF })
    return todoState.dataForm.type
  },
)

export const showFormSelector = createSelector(
  [todoSelector],
  (todoState: ITodoState) => {
    return todoState.showDialog
  },
)
