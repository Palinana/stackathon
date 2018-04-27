import React, { Component } from 'react';
import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';
// import Paper from 'material-ui/Paper';
// import Typography from 'material-ui/Typography';
// import { typography } from 'material-ui/styles';
export class MapContainerNew extends Component {
    render() {
        console.log('props ' , this.props.props)
        let coordinates = this.props.props;
        
      return (
        <Map google={this.props.google} zoom={12} initialCenter={{
            lat: 40.712775,
            lng: -73.989308
          }} style={{width: '600px', height: '500px', margin: '50px 0 10px 40px'}}>
            {coordinates.map((marker,ind) => (
                    <Marker
                    position={{ lat: marker.lat, lng: marker.lng }}
                    key={ind}
                    />
              ))}
  
          {/* <Marker onClick={this.onMarkerClick}
                  name={'Current location'} /> */}
  
          <InfoWindow onClose={this.onInfoWindowClose}>
              <div>
                <h1>HI</h1>
              </div>
          </InfoWindow>
        </Map>
      );
    }
  }
  
  export default GoogleApiWrapper({
    apiKey: ('AIzaSyBdO_NySsk6gdCF1Wmg0eHZV7Cjw_CwMnc')
  })(MapContainerNew)







// class RealMap extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       showingInfoWindow: false,
//       activeMarker: {},
//       selectedPlace: {}
//     }
//     // binding this to event-handler functions
//     this.onMarkerClick = this.onMarkerClick.bind(this);
//     this.onMapClick = this.onMapClick.bind(this);
//   }
//   onMarkerClick = (props, marker, e) => {
//     this.setState({
//       selectedPlace: props,
//       activeMarker: marker,
//       showingInfoWindow: true
//     });
//   }
//   onMapClick = (props) => {
//     if (this.state.showingInfoWindow) {
//       this.setState({
//         showingInfoWindow: false,
//         activeMarker: null
//       });
//     }
//   }
//   render() {
//     const style = {
//       width: '50vw',
//       height: '75vh',
//       'marginLeft': 'auto',
//       'marginRight': 'auto'
//     }
//     return (
//       <Map
//         item
//         xs = { 12 }
//         style = { style }
//         google = { this.props.google }
//         onClick = { this.onMapClick }
//         zoom = { 14 }
//         initialCenter = {{ lat: 39.648209, lng: -75.711185 }}
//       >
//         <Marker
//           onClick = { this.onMarkerClick }
//           title = { 'Changing Colors Garage' }
//           position = {{ lat: 39.648209, lng: -75.711185 }}
//           name = { 'Changing Colors Garage' }
//         />
//         <InfoWindow
//           marker = { this.state.activeMarker }
//           visible = { this.state.showingInfoWindow }
//         >
//           {/* <Paper>
//             <Typography
//               variant = 'headline'
//               component = 'h4'
//             >
//               Changing Colors Garage
//             </Typography>
//             <Typography
//               component = 'p'
//             >
//               98G Albe Dr Newark, DE 19702 <br />
//               302-293-8627
//             </Typography>
//           </Paper> */}
//         </InfoWindow>
//       </Map>
//     );
//   }
// }
// export default RealMap({
//     api: (process.env.GOOGLE_API_KEY_GOES_HERE)
// })(GoogleMapsContainer)


