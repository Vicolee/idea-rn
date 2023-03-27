import { createSlice } from '@reduxjs/toolkit';

export const postSlice = createSlice({
  name: 'post',
  initialState: {
    all: [
        {
            author: "test1@gmail.com",
            title: "Title test 1",
            body: "Body blah blah",
            likedBy: [1, 2, 3],
            categories: [3, 5],
            comments: [1, 2, 10],
            createdAt: new Date('2022-01-15T09:30:00.000Z'),
        },
        {
            author: "test1@gmail.com",
            title: "Title test 2",
            body: "Body blah blah 2",
            likedBy: [1, 2, 3],
            categories: [0, 2],
            comments: [1, 2, 11],
            createdAt: new Date(),
        },
    ],
    curr: {},
  },
  reducers: {
    createPost(state, action) {
        state.all.push(action.payload)
    },

  }
})

export const selectAllPosts = state =>  state.post.all
export const selectPostById = (state, postId) => state.post.all.find(post => post.id === postId)
export const selectCurrPost = state => state.post.curr
export const { createPost } = postSlice.actions
export default postSlice.reducer