import { createSelector } from 'reselect'
import { ITodoState } from '../action-type'

// const dataTodoSelector = (state: any) => state.todos.dataTodo
const todoSelector = (state: any) => state.todos

export const dataSelector = createSelector(
  [todoSelector],
  (todoState: ITodoState) => {
    let dd = todoState.dataTodo
    console.log({ dd })
    return todoState.dataTodo
  },
)

// export const dataSelector = createSelector([dataTodoSelector], (dataTodo) => {
//   let dd = dataTodo
//   console.log({ dd })
//   return dataTodo
// })
