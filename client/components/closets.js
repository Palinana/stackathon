import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchAllFromCloset, fetchSingleCloset, createNewCloset } from '../store/closets';
// import { fetchAllFromCart, postNewItem } from '../store/cart';
// import EditTrip from './editTrip';

class Closet extends Component {
    
    componentDidMount(){
        // this.props.getSingleTrip(); this.props.match.params.id
        this.props.getAllFromCloset(this.props.user.id); //this.props.user.id
    }

    render() {
    //   const newItem = {
    //     quantity: +this.state.quantity,
    //     unitPrice: +this.props.selectedTrip.price,
    //     tripId: this.props.selectedTrip.id,
    //     userId: +this.props.user.id,
    //   }
    //   let trip = this.props.selectedTrip
    console.log("CLOSET ", this.props.closets)
    // console.log("brands ", this.props.closets.brand)
      const closets = this.props.closets;
      const temp1 = this.props.closets

      // let brands = closets.map(closet => {
      //   var rObj = [];
      //   console.log('brand inside: ', closet)
      //   for (let key in closet){
      //     // console.log('key inside: ', key)
      //     if(key === 'brand'){
      //         rObj.push(closet[key])
      //     }
      //   }
        
      //   return rObj;
      // })
      // console.log('size ', temp1)


      // console.log('brand ', brands)


        return (
          <div>
            All Your Sizes
            {
              closets.map(closet => {
                let closetBrand = closet.brand.name;
                // console.log('closet brand: ', closetBrand)
                let closetCategory = closet.category.name;
                // console.log('closet cat: ', closetCategory)
                return (
                <div className="order-list"  key={closet.id}>
                    <h5>Size: {closet.size}</h5>
                    <h5>Brand: {closetBrand}</h5>
                    <h5>Category: {closetCategory}</h5>
                    {/* <h5>{date}</h5>
                    <h5>Name: {order.trip}</h5>
                    <h5>Quantity: {order.quantity}</h5>
                    <h5>Subtotal: {`$${order.subTotal}`}</h5>
                    <h5>Status: {order.status}</h5> */}
                </div>
                )})
            }
          </div>
        )
      }
    }

    const mapState = state => {
      return {
       closets: state.closets,
       user: state.user
      }
    }

    const mapDispatch = dispatch => {
     return {
    //    getSingleTrip: (id) => {
    //      dispatch(fetchSingleTrip(id));
    //    },
        getAllFromCloset: (userId) => {
         dispatch(fetchAllFromCloset());
        }
    //    },
    //    addToCart: (newItem, evt) => {
    //      evt.preventDefault()
    //      dispatch(postNewItem(newItem))
    //    }
     }
    }

    export default connect(mapState, mapDispatch)(Closet)