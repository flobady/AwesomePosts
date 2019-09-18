import { all } from 'redux-saga/effects';
import posts from './posts';

export default function* root() {
	yield all([
		...posts
	])
}

