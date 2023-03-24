// the starting point for your redux store
// this defines what your store state will look like
import { combineReducers } from 'redux';

// import ErrorReducer from './error-reducer';
// import AuthReducer from './auth-reducer';
// import UserReducer from './user-reducer';
import postReducer from '../redux-hooks/post/postSlice';
import userReducer from '../redux-hooks/user/userSlice';

const rootReducer = combineReducers({
//   errors: ErrorReducer,
//   auth: AuthReducer,
  post: postReducer,
  user: userReducer,
});

export default rootReducer;
