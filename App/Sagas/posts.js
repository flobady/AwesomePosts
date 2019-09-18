import * as actions from '../Actions';
import * as api from '../Api';
import * as Types from '../Actions/types';
import { call, put, takeLatest, fork } from 'redux-saga/effects';

function* getPosts() {
	try {
		const result = yield call(api.getPosts);
		yield put(actions.getPostsSuccess(result));
	} catch (error) {
		console.log(error);
		yield put(actions.getPostsFail());
	}
}

function* watchGetPosts() {
	yield takeLatest(Types.GET_POSTS_REQUEST, getPosts)
}

export default [
	fork(watchGetPosts)
]