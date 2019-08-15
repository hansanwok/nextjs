import { INCREASE_NUMBER } from 'actions/types';

const initialState = {
  number: 0,
}

const ExampleReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE_NUMBER:
      return { ...state, number: state.number + 1 }

    default:
      return state;
  }
}

export default ExampleReducer
