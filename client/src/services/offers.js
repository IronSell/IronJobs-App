import axios from 'axios'
import * as USER_HELPERS from '../utils/userToken'

function internalServerError(err) {
  if (err.response && err.response.data && err.response.data.errorMessage) {
    return {
      status: false,
      errorMessage: err.response.data.errorMessage,
    }
  }
  return {
    status: false,
    errorMessage: 'Internal server error. Please check your server',
  }
}

function successStatus(res) {
  return {
    status: true,
    data: res.data,
  }
}

const getOffersService = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}/offers`,
})

export function getOffer(id) {
  return getOffersService
    .get('/' + id)
    .then(successStatus)
    .catch(internalServerError)
}

export function getOffers() {
  return getOffersService.get().then(successStatus).catch(internalServerError)
}

export function applyOffer(id, jobOffer) {
  return getOffersService
    .put('/' + id, jobOffer, {
      headers: {
        Authorization: USER_HELPERS.getUserToken(),
      },
    })
    .then(successStatus)
    .catch(internalServerError)
}
