import API from './api-config';

export function getPlaylist(dispatch, request) {
    return API(`generic/playlists/details/5b845b8346cc29000e4f186a`).then(data => dispatch(request(data)));
}

