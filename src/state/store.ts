import { createStore, applyMiddleware, compose } from 'redux'
import ReduxThunk from 'redux-thunk'
import logger from 'redux-logger'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import reducers from './reducers'

const middlewares = [ReduxThunk]

if (process.env.NODE_ENV === 'development') {
  // middlewares.push(logger);
}

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = createStore(
  persistedReducer,
  compose(applyMiddleware(...middlewares)),
)

// export const persistor = persistStore(store)

// export const store = createStore(reducers, {}, applyMiddleware(thunk))
