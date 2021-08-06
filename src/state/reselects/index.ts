import { createSelector } from 'reselect'
import { ITodoState } from '../action-type'

const dataTodoSelector = (state: any) => state.todos.dataTodo

export const dataSelector = createSelector([dataTodoSelector], (dataTodo) => {
  let dd = dataTodo
  console.log({ dd })
  return dataTodo
})
