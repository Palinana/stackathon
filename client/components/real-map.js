import React, { Component } from 'react';
import { GoogleApiWrapper, InfoWindow, Map, Marker, Paper, Typography } from 'google-maps-react';
// import Paper from 'material-ui/Paper';
// import Typography from 'material-ui/Typography';
// import { typography } from 'material-ui/styles';
export class MapContainerNew extends Component {
  constructor(props){
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    }
  }

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });
  }

  onMapClick = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  }

render() {
    console.log('props ', this.props.props)
    let coordinates = this.props.props
  return (
    <Map google={this.props.google} onClick = { this.onMapClick }  zoom={12} initialCenter={{
        lat: 40.712775,
        lng: -73.989308
      }} style={{width: '600px', height: '500px', margin: '50px 0 10px 40px'}}>
        {coordinates.map((marker, ind) => (
        <Marker
          onClick = { this.onMarkerClick }
          name={'Current location'}
          position={{ lat: marker.lat, lng: marker.lng }}
          icon={{
            url: '../images/pin.png',
            anchor: new google.maps.Point(32,32),
            scaledSize: new google.maps.Size(35,35)
          }}
          key={ind}>
        </Marker>
      ))}
      <InfoWindow 
        visible={this.state.showingInfoWindow} 
        marker={this.state.activeMarker}>
        <div>
          <div>Zara  Store</div>
          <div>101 5th Ave, New York, NY 10003</div>
        </div>
      </InfoWindow>
    </Map>
      );
    }
  }
  export default GoogleApiWrapper({
    apiKey: ('AIzaSyBdO_NySsk6gdCF1Wmg0eHZV7Cjw_CwMnc')
  })(MapContainerNew)
