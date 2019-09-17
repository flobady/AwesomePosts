import * as Types from './types';

export const getPosts = () => ({
	type: Types.GET_POSTS_SUCCESS,
	payload: {
		userId: 1,
		id: 1,
		title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
		body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
	}
})