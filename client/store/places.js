import axios from 'axios';

//ACTION TYPES
const  GET_ALL_PLACES = 'GET_ALL_PLACES'

//ACTION CREATORS
export function getAllPlaces(places) {
  return { type: GET_ALL_PLACES, places}
}

//THUNKS
export const fetchAllplaces = () => {
  return dispatch => {
    axios.get('/api/places')
      .then(res => res.data)
      .then(places => {
        dispatch(getAllPlaces(places))
      })
      .catch(console.error);
  }
}

//REDUCER(S)
export default function placesReducer(state = [], action) {
  switch (action.type) {
    case GET_ALL_PLACES:
      return action.places
    default:
      return state
  }
}
