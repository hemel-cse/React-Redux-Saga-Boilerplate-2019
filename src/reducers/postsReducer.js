import createReducer from './createReducer';
import * as types from '../actions/types';

const initialState = {
    isPostsFetched: false,
    posts: null,
};

export const postsReducer = createReducer(initialState, {
    [types.POSTS_REQUEST](state, action) {
        return {
            ...state,
        };
    },
    [types.POSTS_LOADING_ENDED](state) {
        return { ...state };
    },
    [types.POSTS_RESPONSE](state, action) {
        return {
            ...state,
            isPostsFetched: true,
            posts: action.response
        };
    },
    [types.POSTS_FAILED](state) {
        return {
            ...state,
            isPostsFetched: false
        };
    }
});
