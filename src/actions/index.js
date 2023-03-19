import axios from 'axios';

export const ROOT_URL = 'http://localhost:9090/api';

export const ActionTypes = {
    FETCH_POST: 'FETCH_POST',
    UPDATE_POST: 'UPDATE_POST',
    FETCH_PROFILE: 'FETCH_PROFILE',
    UPDATE_PROFILE: 'UPDATE_PROFILE',
    ERROR_SET: 'ERROR_SET',
    ERROR_CLEAR: 'ERROR_CLEAR',
    AUTH_USER: 'AUTH_USER',
    DEAUTH_USER: 'DEAUTH_USER',
    AUTH_ERROR: 'AUTH_ERROR',
};

// TODO: Add post actions

export function authError(error) {
    return {
      type: ActionTypes.AUTH_ERROR,
      payload: error.toString(),
    };
}

export function getUserProfile() {
    return (dispatch) => {
      axios.get(`${ROOT_URL}/profile`, { headers: { authorization: localStorage.getItem('token') } })
        .then((response) => {
          dispatch({ type: ActionTypes.FETCH_PROFILE, payload: response.data });
        })
        .catch((error) => {
          console.log(error);
        });
    };
  }
  
  export function updateUserProfile(userFields) {
    return (dispatch) => {
      axios.put(`${ROOT_URL}/profile`, userFields, { headers: { authorization: localStorage.getItem('token') } })
        .then((response) => {
          dispatch({ type: ActionTypes.UPDATE_PROFILE, payload: response.data });
          dispatch(authError('""'));
        })
        .catch((error) => {
          dispatch(authError(`${error.response.data.error.toString()}`));
        });
    };
  }
  
  export function signinUser({ email, password }, history) {
    // takes in an object with email and password (minimal user object)
    // returns a thunk method that takes dispatch as an argument (just like our create post method really)
    // does an axios.post on the /signin endpoint
    return (dispatch) => {
      axios.post(`${ROOT_URL}/signin`, { email, password }).then((response) => {
        dispatch({ type: ActionTypes.AUTH_USER });
        localStorage.setItem('token', response.data.token);
        history.push('/profile');
      }).catch((error) => {
        dispatch(authError('Failed sign in'));
      });
    };
  }
  
  export function signupUser({
    firstName, lastName, email, password, resume,
  }, history) {
    return (dispatch) => {
      axios.post(`${ROOT_URL}/signup`, {
        firstName, lastName, email, password, resume,
      }).then((response) => {
        dispatch({ type: ActionTypes.AUTH_USER });
        localStorage.setItem('token', response.data.token);
        history.push('/profile');
      }).catch((error) => {
        dispatch(authError(`${error.response.data.error.toString()}`));
      });
    };
  }
  
  // deletes token from localstorage
  // and deauths
  export function signoutUser(history) {
    return (dispatch) => {
      localStorage.removeItem('token');
      dispatch({ type: ActionTypes.DEAUTH_USER });
      history.push('/');
    };
  }