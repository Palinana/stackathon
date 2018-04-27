import axios from 'axios';

//ACTION TYPES
const GET_ALL_FROM_CLOSET = 'GET_ALL_FROM_CLOSET';
const GET_SINGLE_CLOSET = 'GET_SINGLE_CLOSET';
const ADD_TO_CLOSET = 'ADD_TO_CLOSET';

//ACTION CREATORS
export function getAllFromCloset(closets) {
  return {type: GET_ALL_FROM_CLOSET, closets}
}

export function getSingleCloset(closet) {
  return {type: GET_SINGLE_CLOSET, selectedCloset}
}

export function addToCloset(item) {
  console.log("IN filterTrip action creator!")
  return {type: ADD_TO_CLOSET, item}
}


//THUNKS
export const fetchAllFromCloset = () => {
  return dispatch => {
    axios.get(`/api/closets`)
      .then(res => {
        console.log('Coming back with the data!', res.data)
      return res.data
    }
  )
      .then(closets => {
        // trips.map(trip => trip.categories.map(category => category.name))
        return dispatch(getAllFromCloset(closets))
      })
      .catch(console.error);
  }
}

export const fetchSingleCloset = (id) => {
  return dispatch => {
    axios.get(`/api/closets/${id}`)
      .then(res => res.data)
      .then(closet => {
        dispatch(getSingleCloset(closet))
      })
      .catch(console.error)
  }
}

export const createNewCloset = (closet, history) => {
  return dispatch => {
    return axios.post('/api/closets', closet)
      .then(res => {
        console.log("Getting res.data", res.data)
        return res.data
      })
      .then(closet => {
        dispatch(addToCloset(closet))
        history.push(`/closet/${closet.id}`)
      })
  }
}

//REDUCER(S)


export function closetReducer(closets = [], action) {
  switch (action.type) {
    case GET_ALL_FROM_CLOSET:
      return action.closets
    case ADD_TO_CLOSET:
      return [...closets, action.closets]
    default:
      return closets
  }
}

export function singleClosetReducer(state = {}, action) {
  switch (action.type) {
    case GET_SINGLE_CLOSET:
      return action.selectedCloset
    default:
      return state
  }
}