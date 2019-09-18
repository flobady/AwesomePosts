import * as Types from './types';

export const getPosts = () => ({
	type: Types.GET_POSTS_REQUEST
})

export const getPostsSuccess = (posts) => ({
	type: Types.GET_POSTS_SUCCESS,
	payload: posts
})