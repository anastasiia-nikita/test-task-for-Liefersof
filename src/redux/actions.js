import axios from 'axios';

export const SET_QUERY = 'SET_QUERY';
export const SET_SUGGEST_RESULT = 'SET_SUGGEST_RESULT';
export const SET_USERS = 'SET_USERS';
export const ADD_USER = 'ADD_USERS';

export const setQueryAction = (payload) => ({
  type: SET_QUERY,
  payload,
});

export const setUsersAction = (payload) => ({
  type: SET_USERS,
  payload,
});

export const setSuggestResultAction = (payload) => ({
  type: SET_SUGGEST_RESULT,
  payload,
});

export const setAddUserAction = (payload) => ({
  type: ADD_USER,
  payload,
});

export const getAddress = (query) => {
  return async (dispatch) => {
    const dataFromServer = await axios.get(`https://autocomplete.search.hereapi.com/v1/autocomplete?q=${query}&lang=en&apiKey=z6_qq1549ZHNrnLSE3ov9dlBZukZu2MobGSj7gEuBmQ`);
    // const dataFromServer = await axios.get(`https://autosuggest.search.hereapi.com/v1/autosuggest?q=${query}&apiKey=z6_qq1549ZHNrnLSE3ov9dlBZukZu2MobGSj7gEuBmQ`);
    const response = dataFromServer.data.items;

    dispatch(setSuggestResultAction(response));
  }
}