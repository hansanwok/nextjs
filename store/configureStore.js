import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from 'reducers'
import rootSaga from 'sagas'

const configureStore = preloadedState => {

  const sagaMiddleware = createSagaMiddleware()

  const store = createStore(
    rootReducer,
    preloadedState,
    composeWithDevTools(
      applyMiddleware(sagaMiddleware),
    ),
  )

  store.sagaTask = sagaMiddleware.run(rootSaga)

  return store
}

export default configureStore
