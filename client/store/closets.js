import axios from 'axios';

//ACTION TYPES
const GET_ALL_FROM_CLOSET = 'GET_ALL_FROM_CLOSET';
const GET_SINGLE_CLOSET = 'GET_SINGLE_CLOSET';
const ADD_TO_CLOSET = 'ADD_TO_CLOSET';
const UPDATE_CLOSET = 'UPDATE_CLOSET';
const DELETE_CLOSET = 'DELETE_CLOSET';


//ACTION CREATORS
export function getAllFromCloset(closets) {
  return {type: GET_ALL_FROM_CLOSET, closets}
}

export function getSingleCloset(selectedCloset) {
  return {type: GET_SINGLE_CLOSET, selectedCloset}
}

export function addToCloset(item) {
  console.log("IN filterTrip action creator!")
  return {type: ADD_TO_CLOSET, item}
}
export function updateCloset(updatedCloset) {
  return {type: UPDATE_CLOSET, updatedCloset}
}
export function deleteCloset(id) {
  return {type: UPDATE_CLOSET, id}
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
  //     .then(res => {
  //       console.log('Coming back with the data!', res.data)
  //     return res.data
  //   }
  // )
      .then(closet => {
        dispatch(getSingleCloset(closet))
      })
      .catch(console.error)
  }
}

export const createNewCloset = (closet) => {
  return dispatch => {
    return axios.post('/api/closets', closet)
      .then(res => {
        console.log("Getting res.data", res.data)
        return res.data
      })
      .then(closets => {
        dispatch(addToCloset(closets))
      })
  }
}


export const updateClosetItem = (updatedCloset) => {
  return dispatch => {
    return axios.put(`/api/closets/${updatedCloset.id}`)
      .then(res => {
        console.log("Getting updated trip back", res.data)
        return res.data
      })
      .then(updated => {
        dispatch(updateCloset(updated))
      })
  }
}

export const removeFromCloset = (id) => {
  return dispatch => {
    axios.get(`/api/closets/${id}`)
      // .then(res => res.data)
      .then(() => {
        dispatch(deleteCloset(id))
      })
      .catch(console.error)
  }
}


// case DELETE_STUDENT: 
//           let newStudents = state.filter(stud => stud.id != action.student.id)
//           return action.newStudents;
//REDUCER(S)


export function closetReducer(closets = [], action) {
  switch (action.type) {
    case GET_ALL_FROM_CLOSET:
      return action.closets
    case UPDATE_CLOSET:
      return closets.map(t => t.id === action.updatedCloset.id ? action.updatedCloset : t)
    case DELETE_CLOSET:
      return closets.filter(closet => closet.id !== action.id);  
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
export function addClosetReducer(closets = [], action) {
  switch (action.type) {
    case ADD_TO_CLOSET:
      return [...closets, action.closets]
    default:
      return closets
  }
}