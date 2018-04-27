import React, { Component } from 'react';
// import { Map, InfoWindow, Marker, GoogleApiWrapper }from 'google-maps-react';
import { GooleMapLoader, GoogleMap, Marker } from 'react-google-maps'
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchAllplaces } from '../store/places';
import MapContainerNew from './real-map'


class MapContainer extends Component {
    constructor(props){
        super(props);
    
      }
    componentDidMount() {
        this.props.getAllPlaces();

        // let map = new window.google.maps.Map(document.getElementById('map'), {
        //   center: {lat: -33.8688, lng: 151.2195},
        //   zoom: 13,
        //   mapTypeId: 'roadmap',
        // });
      }
    
      render() {
        // console.log('PLACES!!', this.props.places)
        // console.log('SINGLE BRAND IDD!!', this.props.singleBrandId)
        // console.log('BRAND IDD!!', this.props.brandId)
        const singleBrandId = this.props.singleBrandId
        
        const specBrand =  this.props.places.filter(item => item.brandId === singleBrandId)
        const specBrandlatitude =  specBrand.map(item => item.latitude)
        const longitude =  specBrand.map(item => item.longitude)
        const id = specBrand.id

        const coorsd =  specBrand.map(item => {
            let obj = {};
            obj['lat'] = item.latitude
            obj['lng'] = item.longitude
            return obj
        })
       
        // console.log('compare Brands ', specBrand)
        // console.log('latitude ',longitude)
        // console.log('object of coords ', coorsd)

        // var bounds = new this.props.google.maps.LatLngBounds();
        // for (var i = 0; i < coorsd.length; i++) {
        // bounds.extend(coorsd[i]);
        // }


        return (
          <div id='app'>
            <div id='map' />
            {/* <Map
                item
                xs = { 12 }
                google = { this.props.google }
                zoom = { 14 }
                initialCenter = {{ lat: 39.648209, lng: -75.711185 }}
            >
          </Map> */}
          <div className='google-map'>
            <MapContainerNew props={coorsd} />
          </div>
          
            {/* <GoogleMap
                defaultZoom={8}
                defaultCenter={{ lat: -34.397, lng: 150.644 }}
            >
                {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
            </GoogleMap> */}

          </div>
        ); 
      } 
  }
  const mapState = state => {
    return {                 
      places: state.places, //      places: state.places.filter(place => place.branId === singleBrandId)
      user: state.user
    }
}   

const mapDispatch = dispatch => {
    return {
        getAllPlaces: () => {
            dispatch(fetchAllplaces());
        }
    }
}    

export default connect(mapState, mapDispatch)(MapContainer)
  


