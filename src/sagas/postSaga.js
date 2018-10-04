import { put, call } from 'redux-saga/effects';
import getPosts from '../api/methods/getPosts';
import * as postsActions from '../actions/postsActions';


export default function* postAsync(action) {
    yield put(postsActions.enableLoader());
    try {
        const response = yield call(
		getPosts,
		);
        console.log(response)
        if (response) {
            yield put(postsActions.onPostsResponse(response.token));
            yield put(postsActions.disableLoader({}));
        } else {
            yield put(postsActions.postsFailed());
            yield put(postsActions.disableLoader({}));
        }
    } catch (error) {
        console.log(error)
        yield put(postsActions.postsFailed());
        yield put(postsActions.disableLoader({}));
    }
}
