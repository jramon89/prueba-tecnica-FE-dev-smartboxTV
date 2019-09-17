import {
    GET_PLAYLIST,
    GET_PLAYLIST_REQUEST,
    GET_PLAYLIST_SUCCESS,
} from "../actions/actionsTypes";


const initialState = {
    data: {
        items: []
    }
};

export default function(state=initialState, action) {
    switch(action.type) {
        case GET_PLAYLIST_REQUEST:
            return {
                ...state,
                isFetching: true
            };
        case GET_PLAYLIST_SUCCESS:
            return {
                ...state,
              ...action.data,
              isFetching: false
            };
        default:
            return state

    }
}