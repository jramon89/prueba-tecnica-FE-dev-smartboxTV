import fetch from 'node-fetch';
require('es6-promise').polyfill();

export const path = process.env.HOST || 'localhost',
    port = process.env.PORT || 4000,
    api_url = 'https://mychannel.nunchee.tv/api';

const proxy = 'https://cors-anywhere.herokuapp.com/';

export default function apiConfig(endpoint, params, method = 'GET', body) {
    return fetch(proxy + `${api_url}/${endpoint}`, {
            method,
            mode: 'cors',
            body: JSON.stringify(body),
            headers: {
                'Access-Control-Allow-Origin':'*',
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        }).then(response => response.json()
            .then(json => ({ json, response }))
        ).then(({ json, response }) => {
            if (!response.ok) {
                return json;
            }

            return json;
        }).then(
            response => response
        ).catch(e => e);
}
