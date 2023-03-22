import { ActionTypes } from '../actions';

const initialState = {
  all: [],
  curr: {},
};

const PostReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_POST:
      return { ...state, curr: action.payload };
    case ActionTypes.FETCH_POSTS:
      return { ...state, all: action.payload };
    case ActionTypes.UPDATE_POST:
      return { ...state, curr: action.payload };
    case ActionTypes.CREATE_POST:
      return { ...state, all: [action.payload, ...state.all]}
    default:
      return state;
  }
};

export default PostReducer;
