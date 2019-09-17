import {
    GET_PLAYLIST,
    GET_PLAYLIST_REQUEST,
    GET_PLAYLIST_SUCCESS,
    GET_DETAILS_REQUEST,
    GET_DETAILS_SUCCESS,
    GET_IMAGE_REQUEST,
    GET_IMAGE_SUCCESS
} from "./actionsTypes";

import * as API from '../api/api';

export function getPlaylistRequest() {
    return {
        type: GET_PLAYLIST_REQUEST,
    }
}

export function getPlaylistFetch(data) {
    return {
        type: GET_PLAYLIST_SUCCESS,
        data
    }
}

export function getPlaylist() {
    return dispatch => {
        dispatch(getPlaylistRequest());
        return API.getPlaylist(dispatch, (data) => getPlaylistFetch(data))
    }
}

