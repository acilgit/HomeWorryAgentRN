import * as types from '../actions/ActionTypes';

const initialState = {
    currentPage: 0,
    chat: {
        isRefreshing: false,
        isLoadingMore: false,
        isEndList: false,
        isFirstLoaded: false,
        rows: [],
    },
    order: {
        isRefreshing: false,
        isLoadingMore: false,
        isEndList: false,
        isFirstLoaded: false,
        rows: [],
    },
    me:{
        headUri: '',
        name: '',
        detail: '',
    }
};

export default function image(state = initialState, action) {
    switch (action.type) {
        case types.SET_IMAGE:
            state.uri = action.uri;
            return Object.assign({}, state);
            break;
        default:
            return state;
    }
}

