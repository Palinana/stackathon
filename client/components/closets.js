import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchAllFromCloset, createNewCloset } from '../store/closets';

class Closet extends Component {
    
    componentDidMount(){
        // this.props.getSingleTrip(); this.props.match.params.id
        this.props.getAllFromCloset(this.props.user.id); //this.props.user.id
    }

    render() {
    
    console.log("CLOSET ", this.props.closets)
    // console.log("brands ", this.props.closets.brand)
      const closets = this.props.closets;

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
                  <Link className='categories' to={`/closets/${closet.id}`}>
                    <h3>Category: {closetCategory}</h3>
                    <h3>Size: {closet.size}</h3>
                    <h3>Brand: {closetBrand}</h3>
                    <h3>Style: {closet.style}</h3>
                    </Link>
                </div>
                )})
            }
            <Link className='categories' to={`/categories`}>
            <div>Add an Item</div> </Link>
            
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
        getAllFromCloset: () => {
         dispatch(fetchAllFromCloset());
        }
     }
    }

    export default connect(mapState, mapDispatch)(Closet)