import { all } from 'redux-saga/effects'

import exampleSaga from './ExampleSaga'

export default function* rootSaga() {
  yield all([
    exampleSaga()
  ])
}
