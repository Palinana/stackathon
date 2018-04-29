import axios from 'axios';

//ACTION TYPES
const  GET_ALL_BRANDS = 'GET_ALL_BRANDS'
const  GET_SINGLE_BRAND = 'GET_SINGLE_BRAND'

//ACTION CREATORS
export function getAllBrands(brands) {
  return { type: GET_ALL_BRANDS, brands}
}

export function getSingleBrand(selectedBrand) {
  return {type: GET_SINGLE_BRAND, selectedBrand}
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
export const fetchSingleBrand = (id) => {
  return dispatch => {
    axios.get(`/api/brands/${id}`)
      .then(res => res.data)
  //     .then(res => {
  //       console.log('Coming back with the data!', res.data)
  //     return res.data
  //   }
  // )
      .then(brand => {
        dispatch(getSingleBrand(brand))
      })
      .catch(console.error)
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

export function singleBrandReducer(state = {}, action) {
  switch (action.type) {
    case GET_SINGLE_BRAND:
      return action.selectedBrand
    default:
      return state
  }
}
