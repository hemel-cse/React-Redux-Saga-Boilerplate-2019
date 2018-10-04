import createReducer from './createReducer';
import * as types from '../actions/types';

const initialState = {
    isLoginLoading: false
};

export const loadingReducer = createReducer(initialState, {
    [types.POSTS_ENABLE_LOADER](state) {
        return { ...state, isLoginLoading: true };
    },
    [types.POSTS_DISABLE_LOADER](state) {
        return { ...state, isLoginLoading: false };
    }
});

