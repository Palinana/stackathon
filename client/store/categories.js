import axios from 'axios';

//ACTION TYPES
const  GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES'

//ACTION CREATORS
export function getAllCategories(categories) {
  return { type: GET_ALL_CATEGORIES, categories}
}

//THUNKS
export const fetchAllCategories = () => {
  return dispatch => {
    axios.get('/api/categories')
    .then(res => {
      // console.log("Getting categories", res.data)
      return res.data
    })
      .then(categories => {
        dispatch(getAllCategories(categories))
      })
      .catch(console.error);
  }
}

//REDUCER(S)
export default function categoriesReducer(state = [], action) {
  switch (action.type) {
    case GET_ALL_CATEGORIES:
      return action.categories
    default:
      return state
  }
}
