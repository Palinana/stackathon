/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */
export {default as Navbar} from './navbar'
export {default as UserHome} from './user-home'
export {default as Categories} from './categories'
export {default as AddForm} from './add-form'
export {default as Closet} from './closets'
export {default as SingleCloset} from './single-closet'
export {default as MapContainer} from './map'
export {Login, Signup} from './auth-form'
