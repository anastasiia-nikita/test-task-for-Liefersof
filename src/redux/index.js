// import { combineReducers } from 'redux';
import { SET_SUGGEST_RESULT, SET_USERS, ADD_USER } from './actions';

const initialState = {
  suggestResult: [],
  users: [],
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: action.payload,
      }

    case ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      }

    case SET_SUGGEST_RESULT:
      return {
        ...state,
        suggestResult: action.payload,
      }

    default:
      return state;
  }
} 

// export const rootReducer = combineReducers({ reducer })
