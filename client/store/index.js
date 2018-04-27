import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import categoriesReducer from './categories'
import brandsReducer from './brands'
import placesReducer from './places'
import linksReducer from './links'
import { closetReducer, singleClosetReducer } from './closets'





const reducer = combineReducers({user, categories: categoriesReducer, brands: brandsReducer, places: placesReducer, 
  links: linksReducer, closets: closetReducer, selectedCloset: singleClosetReducer})
const middleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware,
  createLogger({collapsed: true})
))
const store = createStore(reducer, middleware)

export default store
export * from './user'
