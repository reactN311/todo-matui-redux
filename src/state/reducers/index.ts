import { combineReducers } from 'redux'

import reducerTodos from './todoReducer'

const reducers = combineReducers({
  todos: reducerTodos,
})

export default reducers

export type RootState = ReturnType<typeof reducers>
