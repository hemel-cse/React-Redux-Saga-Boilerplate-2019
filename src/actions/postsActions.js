import * as types from './types';

export function requestPosts() {
    return {
        type: types.POSTS_REQUEST,
    };
}


export function postsFailed() {
    return {
        type: types.POSTS_FAILED
    };
}

export function onPostsResponse(response) {
    return {
        type: types.POSTS_RESPONSE,
        response
    };
}

export function enableLoader() {
    return {
        type: types.POSTS_ENABLE_LOADER
    };
}

export function disableLoader() {
    return {
        type: types.POSTS_DISABLE_LOADER
    };
}
