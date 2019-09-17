import * as Types from '../Actions/types';
import { combineReducers } from 'redux';

export default () => {
	const postsList = (state = [], action) => {
		switch(action.type){
			case Types.GET_POSTS_SUCCESS:
				return action.payload;
			default:
				return state;
		}
	}

	const isFetching = (state = false, action) => {
		return !!(action.type === Types.GET_POSTS_REQUEST)
	}

	return combineReducers({
		postsList,
		isFetching
	})
}