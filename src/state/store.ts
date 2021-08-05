import { createStore, applyMiddleware
  // , compose
} from 'redux'
import ReduxThunk from 'redux-thunk'

import reducers from './reducers'
export const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

// import logger from 'redux-logger'
// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'
// import reducerTodos from './reducers/todoReducer'

// const middlewares = [ReduxThunk]

// if (process.env.NODE_ENV === 'development') {
//   // middlewares.push(logger);
// }

// const persistConfig = {
//   key: 'root',
//   storage,
// }

// const persistedReducer = persistReducer(persistConfig, reducers)

// export const store = createStore(
//   persistedReducer,
//   compose(applyMiddleware(...middlewares)),
// )

// export const persistor = persistStore(store)
