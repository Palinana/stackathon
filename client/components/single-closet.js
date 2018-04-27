import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchSingleCloset } from '../store/closets';
import MapContainer from './map'

class SingleCloset extends Component {
    
    componentDidMount(){
        this.props.getSingleCloset(this.props.match.params.id);
        // this.props.getAllFromCart(this.props.user.id);
        // console.log('brandID ', this.props.selectedCloset.brand)

    }

    render() {
      const item = this.props.selectedCloset
    

    //   const brand = selectedCloset.brand
    //   const category = selectedCloset.category

        // console.log('selectedCloset ', selectedCloset)
        //  console.log('selectedCloset  name', selectedCloset.brand)
        // // selectedCloset &&



    //   console.log('select ', selectedCloset)
    //   console.log('brand ', brand)
    //   console.log('timestamp ', Date.now())
    //   console.log('category ', category)

    //   console.log('cate ', category)
    //     for(let key in brand){
    //         console.log(brand[key])
    //     }
    //     quantity: +this.state.quantity,
    //     unitPrice: +this.props.selectedTrip.price,
    //     tripId: this.props.selectedTrip.id,
    //     userId: +this.props.user.id,
    //   }
        let {name} = item.brand || {};
        console.log('Name : ', name)
        let {name : closetCategory} = item.category || {};

        return (
          <div>
            Single page
           
            {/* {
                
                selectedCloset && <div>{selectedCloset.brand[name]}
                </div>
            } */}
            {
            //   selectedCloset.map(item => {
                
                // console.log('closet cat: ', closetCategory)
                // return (
                <div className="order-list"  key={item.id}>
                    <h3>Category: {closetCategory}</h3>
                    <h3>Size: {item.size}</h3>
                    <h3>Brand: {name}</h3>
                    <h3>Style: {item.style}</h3>
        
                </div>
                // )})
            }
             <MapContainer singleBrandId={this.props.selectedCloset.brandId}/>
             <Link className='categories' to={`/home`}><button type="submit">Back</button></Link>
            
          </div>
        )
      }
}

const mapState = state => {
    return {
      selectedCloset: state.selectedCloset,
      user: state.user
    }
}   

const mapDispatch = dispatch => {
    return {
        getSingleCloset: (id) => {
            dispatch(fetchSingleCloset(id));
        }
    }
}    

export default connect(mapState, mapDispatch)(SingleCloset)