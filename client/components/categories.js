import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAllCategories } from '../store/categories';

class Categories extends Component {
    
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.getAllCategories();
        
    }
    // handleClick(val){
    //     console.log('VALUE' ,val)
    // }
    render() {
        console.log('categories Data: ', this.props.categories)
        // console.log('user USER ID ' , this.props.user)
        const categories = this.props.categories
                                    // to={`/add`} params={{ test: category.id }}
        return (
            <div className="container">
             <h2 className="category-list">Choose A Category</h2>
             <div className="categories">
                 {
                     categories.map((category, i) => {
                        return (
                            
                            // <div className="cat-item" >{category.name}
                            // <Link to={{pathname: '/add', state: { categ: category.id}}} className='category' key={category.id}>
                            // <img className="img-thumbnail" react_id={`${i}`} src={`/images/${i}.png`} />
                            // </Link>
                            // </div>
                           
                            
                            <Link to={{pathname: '/add', state: { categ: category.id}}} className='category' key={category.id}>
                            <div className="cat-item" react_id={`${i}`}>{category.name}</div>
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
      categories: state.categories,
      user: state.user.id,
      email: state.user.email
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