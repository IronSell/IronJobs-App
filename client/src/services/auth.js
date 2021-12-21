import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import * as USER_HELPERS from '../utils/userToken';

// here we are just maing our code look more DRY. With every backend call we must deal with errors and success states. The idea of creating these kinds of services is to make our lives easier in the components
function internalServerError(err) {
  if (err.response && err.response.data && err.response.data.errorMessage) {
    return {
      status: false,
      errorMessage: err.response.data.errorMessage,
    };
  }
  return {
    status: false,
    errorMessage: 'Internal server error. Please check your server',
  };
}

function successStatus(res) {
  return {
    status: true,
    data: res.data,
  };
}

// creates a basic url for every request in this file
const authService = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}/auth`,
});

export function login(credentials) {
  return authService
    .post('/login/user', credentials)
    .then(successStatus)
    .catch(internalServerError);
}

// Axios call to /api/login/company
export function loginCompany(credentials) {
  return authService
    .post('/login/company', credentials)
    .then(successStatus)
    .catch(internalServerError);
}

export function getLoggedIn() {
  return authService
    .get(`session`, {
      headers: {
        Authorization: USER_HELPERS.getUserToken(),
      },
    })
    .then(successStatus)
    .catch(internalServerError);
}

// Prueba session company
export function getCompanyLoggedIn() {
  return authService
    .get(`session-company`, {
      headers: {
        Authorization: USER_HELPERS.getUserToken(),
      },
    })
    .then(successStatus)
    .catch(internalServerError);
}

export function signup(credentials) {
  return authService
    .post('/signup/user', credentials)
    .then(successStatus)
    .catch(internalServerError);
}

export function logout() {
  return authService
    .delete('/logout', {
      headers: {
        Authorization: USER_HELPERS.getUserToken(),
      },
    })
    .then(successStatus)
    .catch(internalServerError);
}

export function signupCompany (crendentials) {
  return authService
    .post ('/signup/company', crendentials)
    .then(successStatus)
    .catch(internalServerError);
}

export function logoutCompany() {
  return authService
    .delete('/logout/company', {
      headers: {
        Authorization: USER_HELPERS.getUserToken(),
      },
    })
    .then(successStatus)
    .catch(internalServerError);
}
