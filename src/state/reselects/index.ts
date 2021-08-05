import { createSelector } from 'reselect'

const dataTodoSelector = (state : any) => state.todos;

export const dataSelector = createSelector(
  [dataTodoSelector],
  todos => {
    let dd = todos.dataTodo
    console.log({dd})
    return todos.dataTodo
  }
)
