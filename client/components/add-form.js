import React, { Component } from 'react';
import {connect} from 'react-redux'
import { fetchAllBrands } from '../store/brands';
import { fetchAllCategories } from '../store/categories';

// import {auth} from '../store'

class AddForm extends Component{

    componentDidMount(){
        this.props.getAllBrands();
        this.props.getAllCategories();
    }
     
    render() {
        console.log('categories Data: ', this.props.brands)
        const brands = this.props.brands
        const categories = this.props.categories

        return (
            <div className='form'>
            <form >
                <div>
                    <h2> Add Your Size</h2>
                    <label className="brand">Brand</label>
                    <select className="form-control" id="sel1">
                        {
                            brands.map(brand => {
                                return (
                                    // <option key="0">Select</option>
                                    <option key={brand.id}>{brand.name}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <div>
                    <label className="category">Category</label>
                    <select className="form-control" id="sel1">
                        {
                            categories.map(category => {
                                return (
                                    // <option key="0">Select</option>
                                    <option key={category.id}>{category.name}</option>
                                )
                            })
                        }
                    </select>
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

const mapState = state => {
    return {
      brands: state.brands,
      categories: state.categories
    }
  }
  
  const mapDispatch = dispatch => {
   return {
     getAllBrands: () => {
       dispatch(fetchAllBrands());
     },
     getAllCategories: () => {
        dispatch(fetchAllCategories());
    }
     
   }
}

export default connect(mapState, mapDispatch)(AddForm);
