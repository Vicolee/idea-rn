import { ActionTypes } from '../actions';

const initialState = {
  post: {},
};

const PostReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_POST:
      return { ...state, post: action.payload };
    case ActionTypes.UPDATE_POST:
      return { ...state, post: action.payload };
    default:
      return state;
  }
};

export default PostReducer;
