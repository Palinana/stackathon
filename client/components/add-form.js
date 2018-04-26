import React, { Component } from 'react';
import {connect} from 'react-redux'
// import PropTypes from 'prop-types'
// import {auth} from '../store'

class AddForm extends Component{
    constructor() {
        super();
      }
     
      render() {
        console.log('addd')
        return (
            <div className='add-form'>
            <form >
                <div>
                    <h2> Add Your Size</h2>
                    <label className="brand">Brand</label>
                    <input name="brand" type="text" />
                </div>
                <div>
                    <label className="category">Category</label>
                    <input name="category" type="text" />
                </div>
                <div>
                    <label className="size">Size</label>
                    <input name="size" type="number" />
                </div>
                <div>
                    <label className="model">Model</label>
                    <input name="model" type="text" />
                </div>
                <div>
                    <button type="submit">Add</button>
                </div>
            </form>
            </div>
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
export default connect(null, null)(AddForm);
