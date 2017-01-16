import React, { PropTypes as T } from 'react'
import ReactDOM from 'react-dom'

import cache from './ScriptCache'
import GoogleApi from './GoogleApi'

const defaultMapConfig = {}
export const wrapper = (options) => (WrappedComponent) => {
  const apiKey = 'AIzaSyBbnApuQR5k2uupNDdyAGOHaG-kp9FClKU';
  const libraries = options.libraries || ['places'];

  class Wrapper extends React.Component {
    constructor(props, context) {
      super(props, context);

      this.state = {
        loaded: false,
        map: null,
        google: null
      }
    }

    componentDidMount() {

      const refs = this.refs;
      this.scriptCache.google.onLoad((err, tag) => {
        // try {
          const maps = window.google.maps;
          const props = Object.assign({}, this.props, {
            loaded: this.state.loaded
          });

          const mapRef = refs.map;
          const node = ReactDOM.findDOMNode(mapRef);
          let center = new maps.LatLng(this.props.lat, this.props.lng)

          let mapConfig = Object.assign({}, defaultMapConfig, {
            center, zoom: this.props.zoom
          })
          this.map = new maps.Map(node, mapConfig);
          this.setState({
            loaded: true,
            map: this.map,
            google: window.google
          })
        // } catch (e){
        //   console.log(e);
        //   // window.location.reload();
        // }
      });

    }

    componentWillMount() {

      this.scriptCache = cache({
        google: GoogleApi({
          apiKey: apiKey,
          libraries: ['drawing']
        })
      });
    }

    render() {
      const props = Object.assign({}, this.props, {
        loaded: this.state.loaded,
        map: this.state.map,
        google: this.state.google,
        mapComponent: this.refs.map
      })
      return (
        <div>
          <WrappedComponent {...props} />
          <div ref='map' />
        </div>
      )
    }
  }

  return Wrapper;
}

export default wrapper;
