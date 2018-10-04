import { takeEvery, all } from 'redux-saga/effects';
import * as types from '../actions/types';
import postSaga from './postSaga';

export default function* watch() {
   yield all([takeEvery(types.POSTS_REQUEST, postSaga)]);

}
