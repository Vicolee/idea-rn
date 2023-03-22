// the starting point for your redux store
// this defines what your store state will look like
import { combineReducers } from 'redux';

// import ErrorReducer from './error-reducer';
// import AuthReducer from './auth-reducer';
// import UserReducer from './user-reducer';
import PostReducer from './post-reducer';

const rootReducer = combineReducers({
//   errors: ErrorReducer,
//   auth: AuthReducer,
  post: PostReducer,
  // user: UserReducer,
});

export default rootReducer;
