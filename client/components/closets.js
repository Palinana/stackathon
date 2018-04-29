import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchAllFromCloset, createNewCloset, removeFromCloset } from '../store/closets';
import axios from 'axios';
import store from '../store';
import Navbar from './navbar';


class Closet extends Component {
    
  constructor() {
    super();
    this.handleItemDelete = this.handleItemDelete.bind(this);
  }

  handleItemDelete(event, data) {
    event.preventDefault();
    let closetId = this.props.closets.id;
    console.log('Handle DATA ', data)
    axios.delete(`/api/closets/${data}`, data)
            .then(() => {
                store.dispatch(removeFromCloset(data))
            })
            .then(res => { 
               return axios.get('/api/closets')
            })
            .then(res => res.data)
            .then(closet => {
              store.dispatch(fetchAllFromCloset(closet));

            })
            .catch(err => console.error(err))
    
        }
    componentDidMount(){
        this.props.getAllFromCloset(this.props.user.id); 
    }
   
    render() {
    
    console.log("CLOSET ", this.props.closets)
    // console.log("STST id ", this.props.closetId)
      const closets = this.props.closets;

        return (
          <div className="main-closet">
            <Navbar /> 
            <h1 className="your-closet-text">Your Sizes</h1>
            <div className="all-from-closet">
              {
                closets.map(closet => {
                  let closetBrand = closet.brand.name;
                  // console.log('closet brand: ', closetBrand)
                  let closetCategory = closet.category.name;
                  // console.log('closet cat: ', closetCategory)
                  return (
                  <div className="order-list"  key={closet.id}>
                    <Link className='closets' to={`/closets/${closet.id}`}>
                      <h3 className="closet-list">Category: {closetCategory} </h3>
                      <h3 className="closet-list">Size: {closet.size}</h3>
                      <h3 className="closet-list">Brand: {closetBrand}</h3>
                      {/* { closet.style ? 
                      <h3 className="closet-list">Style: {closet.style}</h3> : null
                       } */}
                      <h3 className="closet-list">Style: {closet.style}</h3>
                      </Link>
                      <button className="delete-btn" onClick={((e) => this.handleItemDelete(e, closet.id))}>Delete</button>
                  </div>
                  )})
              }
            </div>
            <Link className="add-item" to={`/categories`}>
            <button  className="add-item-btn">Add an Item</button></Link>
            
          </div>
        )
      }
    }

    const mapState = state => {
      return {
       closets: state.closets,
       user: state.user,
       closetId: state.closets.id
      }
    }

    const mapDispatch = (dispatch,ownProps) => {
      // console.log('OWN ' , this.ownProps.closets)
     return {
        getAllFromCloset: () => {
         dispatch(fetchAllFromCloset());
        }
      
     }
    }

    export default connect(mapState, mapDispatch)(Closet)