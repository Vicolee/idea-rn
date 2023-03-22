import axios from 'axios';
import posts from '../../assets/localStorage';

export const ROOT_URL = 'http://localhost:9090/api';

export const ActionTypes = {
    FETCH_POST: 'FETCH_POST',
    FETCH_POSTS: 'FETCH_POSTS',
    CREATE_POST: 'CREATE_POST',
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
export function createPost(post) {
  posts.add(post);
  console.log('all posts after adding: ' + posts);
  // return (dispatch) => {
  //   // post is an object with title, content, and categories
  //   axios.post(`${ROOT_URL}/posts/create`, post, { headers: { authorization: localStorage.getItem('token') } })
  //     .then((response) => {
  //       dispatch({ type: ActionTypes.CREATE_POST, payload: response.data });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
}

export function fetchPost(postId) {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/posts/${postId}`, { headers: { authorization: localStorage.getItem('token') } })
      .then((response) => {
        dispatch({ type: ActionTypes.FETCH_POST, payload: response.data });
        dispatch({ type: ActionTypes.ERROR_CLEAR, payload: '' });
      })
      .catch((error) => {
        console.log(error);
        dispatch({ type: ActionTypes.ERROR_SET, payload: error });
      });
  };
}

export function fetchPosts() {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/posts`, { headers: { authorization: localStorage.getItem('token') } })
      .then((response) => {
        dispatch({ type: ActionTypes.FETCH_POSTS, payload: response.data });
        dispatch({ type: ActionTypes.ERROR_CLEAR, payload: '' });
      })
      .catch((error) => {
        console.log(error);
        dispatch({ type: ActionTypes.ERROR_SET, payload: error });
      });
  };
}

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