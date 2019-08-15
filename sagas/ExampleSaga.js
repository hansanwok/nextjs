import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { GET_GITHUB_API } from 'actions/types';
import { getGithubApiSuccess, getGithubApiFail } from 'actions';
import fetch from 'isomorphic-unfetch'

function* handleGetGithubApi() {
  try {
    const response = yield fetch('https://api.github.com/repos/zeit/next.js');
    const data = yield response.json()
    if (data.stargazers_count) {
      yield put(getGithubApiSuccess(data.stargazers_count))
    } else {
      yield put(getGithubApiFail());
    }
  } catch (error) {
    console.log('error', error)
    yield put(getGithubApiFail());
  }
}

function* watchGetGithubApi() {
  yield takeEvery(GET_GITHUB_API, handleGetGithubApi);
}

export default function* exampleSaga() {
  yield all([
    fork(watchGetGithubApi)
  ]);
}
