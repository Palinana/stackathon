import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import { fetchAllBrands } from '../store/brands';
import { fetchAllCategories, createNewCloset } from '../store/categories';

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
            size: this.state.size,
            brandId: Number(this.state.brandId),
            categoryId: this.props.location.state.categ,
            userId: this.state.userId
        };
        axios.post('/api/closets', closetItem)
        console.log('!!!!!!1', closetItem)
            .then(res => {
                let formattedRes = res.data;
                store.dispatch(createNewCloset(formattedRes))
            })
            .then(() => { 
                this.props.history.push('/closets')
            })
            .catch(err => console.error(err))
    }
    
    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }


     
    render() {
        // console.log('categories Data: ', this.props.brands)
        const brands = this.props.brands
        const categories = this.props.categories
        // console.log('this.state.state.categories.id ', categories)
        // console.log("state brand ", this.state.brandId)
        // console.log('whole OBJECT ', this.state.closetItem)

        
        
        // const foo = this.props.location.state.categ
        // console.log('ID',foo) // "bar"
        // console.log('IIIIIDDDD' , this.props.location.state.foo)

        return (
            <div className='form'>
            <form onSubmit={this.handleSubmit}>
                <div>
                    <h2> Add Your Size</h2>
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
                <div>
                    {/* <label className="category">Category</label>
                    <select className="form-control" id="sel1">
                        {
                            categories.map(category => {
                                return (
                                    // <option key="0">Select</option>
                                    <option key={category.id}>{category.name}</option>
                                )
                            })
                        }
                    </select> */}
                </div>
                <div>
                    <label className="size">Size</label>
                    <input name="size" type="number" onChange={this.handleChange}  value={this.state.size}/>
                </div>
                <div>
                    <label className="model">Model</label>
                    <input name="style" type="text" onChange={this.handleChange}  value={this.state.style}/>
                </div>
                <div>
                    <Link className='categories' to={`/home`}><button type="submit">Add</button></Link>
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
