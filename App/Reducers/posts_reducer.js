import * as Types from '../Actions/types';
import { combineReducers } from 'redux';

export default () => {
	const postsList = (state = [], action) => {
		switch(action.type){
			case Types.GET_POSTS_SUCCESS:
				// we keep an ordered store
				return action.payload.data.sort((a,b) =>  a.title.localeCompare(b.title));
			default:
				return state;
		}
	}

	const isFetching = (state = false, action) => {
		return !!(action.type === Types.GET_POSTS_REQUEST)
	}

	const isFailed = (state = false, action) => {
		return !!(action.type === Types.GET_POSTS_FAIL)
	}

	return combineReducers({
		postsList,
		isFetching,
		isFailed
	})
}