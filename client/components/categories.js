import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAllCategories } from '../store/categories';


class Categories extends Component {
    
    componentDidMount(){
        this.props.getAllCategories();
    }
    render() {
        console.log('categories Data: ', this.props.categories)
        const categories = this.props.categories

        return (
            <div className="container">
             <h2>Choose A Category</h2>
             <div>
                 {
                     categories.map(category => {
                        return (
                            <Link className='category' to={`/add`} key={category.id}>
                            <ul>{category.name}</ul>
                            </Link>
                        )
                      })
                 }
             </div>
            
            </div>
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
     getAllCategories: () => {
       dispatch(fetchAllCategories());
     }
   }
  }
  
  export default connect(mapState, mapDispatch)(Categories)