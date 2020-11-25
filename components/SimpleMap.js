import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '576px', width: '576px' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDj71gNkPZ0bjY7-PlxYrse-JEJl8CzopM' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="Olympic Christmas Trees"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;