import {
  INCREASE_NUMBER,
  GET_GITHUB_API_SUCCESS
} from 'actions/types';

const initialState = {
  number: 0,
  star: 0
}

const ExampleReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE_NUMBER:
      return { ...state, number: state.number + 1 }

    case GET_GITHUB_API_SUCCESS:
      return { ...state, star: action.payload.star }

    default:
      return state;
  }
}

export default ExampleReducer
