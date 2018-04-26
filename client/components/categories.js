import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import { fetchAllTrips, search } from '../store/trips';


class Categories extends Component {
    constructor() {
      super();
  
    //   this.state = {
    //     search: '',
    //     isDirty: false
    //   };
    }
    // componentDidMount(){
    //     this.props.getAllTrips();
    // }
    render() {
        console.log('HIII')
    
        return (
            <div className="container">Hi</div>
        )
    }
}

const mapState = state => {
    return {
      categories: state.categories
    }
  }
  
  const mapDispatch = dispatch => {
   return {
    //  getAllTrips: () => {
    //    dispatch(fetchAllTrips());
    //  }
   }
  }
  
  export default connect(null, null)(Categories);