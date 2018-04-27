import axios from 'axios';

//ACTION TYPES
const  GET_ALL_LINKS = 'GET_ALL_LINKS'

//ACTION CREATORS
export function getAllLinks(links) {
  return { type: GET_ALL_LINKS, links}
}

//THUNKS
export const fetchAllLinks = () => {
  return dispatch => {
    axios.get('/api/links')
      .then(res => res.data)
      .then(links => {
        dispatch(getAllLinks(links))
      })
      .catch(console.error);
  }
}

//REDUCER(S)
export default function linksReducer(state = [], action) {
  switch (action.type) {
    case GET_ALL_LINKS:
      return action.links
    default:
      return state
  }
}