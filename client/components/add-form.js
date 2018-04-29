import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import axios from 'axios';
import store from '../store';
import Navbar from './navbar';
import { fetchAllBrands } from '../store/brands';
import {  createNewCloset } from '../store/closets';
import {fetchAllCategories} from '../store/categories'

// import {auth} from '../store'

class AddForm extends Component{
    
    constructor(props) {
        super(props);
        this.state = {
            style: '',
            size: '',
            brandId: '',
            categoryId: '',
            userId: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        this.props.getAllBrands();
        this.props.getAllCategories();
        // const {handle}  = this.props.match.params;
        // const {cat} = this.props.location.state
    }

    // handleChange(event){

    // }
    handleSubmit(event){
        event.preventDefault();
        const closetItem = {
            style: this.state.style,
            size: Number(this.state.size),
            brandId: Number(this.state.brandId),
            categoryId: 2,
            userId: Number(this.props.user)
        }
        // this.props.createNewCloset(closetItem)
        // this.setState({
        //     style: '',
        //     size: '',
        //     brandId: '',
        //     categoryId: '',
        //     userId: ''
        // })
        // console.log("Form is submitted!!", newTrip)
        axios.post('/api/closets', closetItem)
        // console.log('!!!!!!1', closetItem)
            .then(res => {
                let formattedRes = res.data;
                store.dispatch(createNewCloset(formattedRes))
            })
            .then(() => { 
                this.props.history.push('/categories')
            })
            .catch(err => console.error(err))
    }
    
    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }


     
    render() {
        // console.log('categories Data: ', this.props.brands)
        const brands = this.props.brands
        // const categories = this.props.location.state.categ
        // console.log('params ' ,this.props)
        // console.log('this.state.state.categories.id ', categories)
        console.log("state brand ", this.state.brandId)
        console.log("size ", this.state.size)
        console.log("style ", this.state.style)
        console.log("userId", this.props.user)

        // console.log('whole OBJECT ', this.state.closetItem)

        
        
        // const foo = this.props.location.state.categ
        // console.log('ID',foo) // "bar"
        // console.log('IIIIIDDDD' , this.props.location.state.foo)

        return (
            <div className='form'>
            <Navbar />
            <form className="add-form" onSubmit={this.handleSubmit}>
                <div className="select-div">
                    <h2 className="form-add-text"> Add Your Size</h2>
                    <label className="brand">Brand</label>
                    <select  onChange={this.handleChange}  name="brandId" className="form-control" id="sel1" >
                        <option value='1'>Select</option>
                        {
                            brands.map(brand => {
                                return (
                                    // <option key="0">Select</option>
                                    <option key={brand.id} value={brand.id} >{brand.name}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <div className="list-item">
                    <label className="size">Size</label>
                    <input name="size" type="number" onChange={this.handleChange}  value={this.state.size}/>
                </div>
                <div className="list-item">
                    <label className="model">Model</label>
                    <input name="style" type="text" onChange={this.handleChange}  value={this.state.style}/>
                </div>
                <div className="list-item">
                    <button className="add" type="submit">Add</button>
                </div>
            </form>
            </div>
        )
}
}

const mapState = state => {
    return {
      brands: state.brands,
      categories: state.categories,
      user: state.user.id,
    }
  }
  
  const mapDispatch = (dispatch) => {
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
