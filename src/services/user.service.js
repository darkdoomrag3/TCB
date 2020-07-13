//import config from 'config';
import { handleResponse } from '../helpers/handel-response';

import { authHeader } from '../helpers/auth-header'

export const userService = {
    getAll,
    getById
};

function getAll() {
    const requestOptions = { method: 'GET', headers: authHeader() };
    return fetch(`/users`, requestOptions).then(handleResponse);
}

function getById(id) {
    const requestOptions = { method: 'GET', headers: authHeader() };
    return fetch(`/users/${id}`, requestOptions).then(handleResponse);
}