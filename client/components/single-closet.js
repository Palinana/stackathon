import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Navbar from './navbar';
import { fetchSingleCloset, updateClosetItem } from '../store/closets';
// import { fetchSingleBrand } from '../store/brands';
import MapContainer from './map'
import axios from 'axios';
import store from '../store';

class SingleCloset extends Component {
    constructor(props) {
        super(props);
        this.state = {
            style: '',
            size: '',
            brandId: '',
            categoryId: '',
            userId: '',
            isClicked: false,
            links: [
                "https://www.zara.com/us/",
                "https://shop.mango.com/us",
                "http://us.topshop.com/",
                "https://www.gap.com",
                "https://www.levi.com/US/en_US/",
                "https://www.victoriassecret.com"
            ]
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);

    }
    onClick(e){
        e.preventDefault();
        this.setState({isClicked: true})
    }

    handleSubmit(event){
        let id = this.props.match.params.id;
        event.preventDefault();
        const closetItem = {
            style: this.props.selectedCloset.style,
            size: Number(this.state.size),
            brandId: Number(this.props.selectedCloset.brandId),
            categoryId: Number(this.props.selectedCloset.categoryId),
            userId: Number(this.props.user)
        }
      
        axios.put(`/api/closets/${id}`, closetItem)
            .then(res => {
                let formattedRes = res.data;
                store.dispatch(updateClosetItem(formattedRes))
            })
            .then(res => { 
                return axios.get(`/api/closets/${id}`, id)
             })
             .then(() => {
              store.dispatch(fetchSingleCloset(id));

            })
            .catch(err => console.error(err))
            this.setState({isClicked: false})
    }
    
    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    componentDidMount(){
        this.props.getSingleCloset(this.props.match.params.id);
    }
    handleClick(){
        e.preventDefault();
        window.location.assign("https://www.bbc.co.uk");
    }

    render() {
      const item = this.props.selectedCloset
      const item2 = item.id
      console.log('brands LINK ', item2)

        console.log('selectedCloset ', item)
   
        let {name, link} = item.brand || {};
        // let {link}  = item.brand || {};
        // console.log('LInk : ', link)
        let {name : closetCategory} = item.category || {};

        const brands = this.props.brands
        // console.log('his.props.match.params.id', this.props.match.params.id)
        // console.log('selectedCloset ', item)
        console.log('state.links', this.state.links[2-1])
        const linkKS = this.state.links[2-1]
        // .map( (x, ind) => {
            // console.log("item id***",item.id)
            // console.log(x[ind+1])
            // return x[ind+1] === item.id

            

        // })
        
        // const linkKS = this.state.links.map((x,ind) => {
        //     // console.log('filter id', x[1])
        //     if(x[ind+1] === item2){
        //         return x[ind+1]
        //     }
        // })
        console.log('item2', item2)
        console.log('state linkd ', linkKS)
    

        return (
          <div> 
              <Navbar />  
            {
                <div className="order-list"  key={item.id}>
                    <h3>Category: {closetCategory}</h3>
                    <h3>Size: {item.size}</h3><button onClick={this.onClick.bind(this)}>Edit</button>          
                        {this.state.isClicked && 
                                <div className='form'>
                                <form onSubmit={this.handleSubmit}>
                                    <div>
                                        
                                    </div>
                                    <div>
                                        <label className="size">Size</label>
                                        <input name="size" type="number" onChange={this.handleChange}  value={this.state.size}/>
                                    </div>
                                    <div>
                                        <button type="submit">Change</button>
                                    </div>
                                </form>
                                </div>
                        }
                    <h3>Brand: {name}</h3>
                    <h3>Style: {item.style}</h3>
                    <h3>Link: {link}</h3>
        
                </div>
            }
            <div>{name} stores</div>
            <MapContainer singleBrandId={this.props.selectedCloset.brandId}/>
            {/* <a href="https://www.google.com">here</a> */}
            <a href="https://www.google.com"><button onClick={this.handleClick}>Go to {name} website</button></a>
            <Link className='categories' to={`/home`}><button type="submit">Back</button></Link>
          </div>
        )
      }
}

const mapState = state => {
    return {
      selectedCloset: state.selectedCloset,
      user: state.user.id,
      brands: state.brands,
      categories: state.categories,
      singleBrand: state.selectedBrand
    }
}   

const mapDispatch = dispatch => {
    return {
        getSingleCloset: (id) => {
            dispatch(fetchSingleCloset(id));
        }
        // getSingleBrand: (id) => {
        //     dispatch(fetchSingleBrand(id))
        // }
    }
}    

export default connect(mapState, mapDispatch)(SingleCloset)