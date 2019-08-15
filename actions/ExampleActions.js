import {
  INCREASE_NUMBER,
  GET_GITHUB_API,
  GET_GITHUB_API_SUCCESS,
  GET_GITHUB_API_FAIL,
} from './types'

export const increaseNumber = () => ({
  type: INCREASE_NUMBER
})

export const getGithubApi = () => ({
  type: GET_GITHUB_API
})

export const getGithubApiSuccess = star => ({
  payload: { star },
  type: GET_GITHUB_API_SUCCESS
})


export const getGithubApiFail = error => ({
  payload: { error },
  type: GET_GITHUB_API_FAIL
})
