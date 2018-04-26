import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import { fetchAllTrips, search } from '../store/trips';


class Dashboard extends Component {
    constructor() {
      super();
  
    }
  
    render() {
        console.log('Dash')
    
        return (
            <div className="container">Hi, Name</div>
        )
    }
}

// const mapState = state => {
//     return {
//       categories: state.categories
//     }
//   }
  
//   const mapDispatch = dispatch => {
//    return {
//     //  getAllTrips: () => {
//     //    dispatch(fetchAllTrips());
//     //  }
//    }
//   }
  
  export default connect(null, null)(Dashboard);