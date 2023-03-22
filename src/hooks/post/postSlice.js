import { createSlice } from '@reduxjs/toolkit'

export const postSlice = createSlice({
  name: 'post',
  initialState: {
    all: [],
    curr: {},
  },
  reducers: {
    fetchPost: state => { // TODO: Add async method for fetching from backend
      state.curr = action.payload
    },
    fetchPosts: state => { // TODO: Add async method for fetching from backend
        state.all = action.payload
    },
    createPost: state => {
        state.all = [action.payload, ...state.all]
    },

  }
})

export const selectAllPosts = state => state.post.all
export const selectCurrPost = state => state.post.curr
export const { fetchPost, fetchPosts, createPost } = postSlice.actions
export default postSlice.reducer