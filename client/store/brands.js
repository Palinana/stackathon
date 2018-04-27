import axios from 'axios';

//ACTION TYPES
const  GET_ALL_BRANDS = 'GET_ALL_BRANDS'

//ACTION CREATORS
export function getAllBrands(brands) {
  return { type: GET_ALL_BRANDS, brands}
}

//THUNKS
export const fetchAllBrands = () => {
  return dispatch => {
    axios.get('/api/brands')
      .then(res => res.data)
      .then(brands => {
        dispatch(getAllBrands(brands))
      })
      .catch(console.error);
  }
}

//REDUCER(S)
export default function brandsReducer(state = [], action) {
  switch (action.type) {
    case GET_ALL_BRANDS:
      return action.brands
    default:
      return state
  }
}
