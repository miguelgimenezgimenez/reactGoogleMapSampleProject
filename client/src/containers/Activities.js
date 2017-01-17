import React, {Component} from 'react';
import {connect} from 'react-redux';
import inside from 'point-in-polygon';
import GoogleMapDrawFilter from '../aux/GoogleMapDrawFilter';
import {fetchActivities} from '../redux/actions';
import '../Styles/MainStyle.css';

const path=[];
const polygon=[];
const google=window.google;
let poly;
let tempArea;

class AllActivities extends Component {
  constructor () {
    super();
    this.state = {
      draw:false,
      activeMarkers:[],
    };
  }
  toggleDraw () {
    this.setState(
      {draw:!this.state.draw}
    )
  }
  componentDidMount(){
    this.props.fetchActivities(this.props.params.type);
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.params.type!==prevProps.params.type) {
      this.props.fetchActivities(this.props.params.type);
    }

  }

  handleReturnedMarkers(markers) {
    console.log(markers);
    this.setState({
      activeMarkers: markers
    });
  }

  renderMarkerInfo() {
    if (this.state.activeMarkers) {
      return this.state.activeMarkers.map((marker,i)=>(
        <div key={`marker${i}`}>
          {marker.info}
        </div>)
      )
    }
  }


  render() {

    return (<div>
      <button onClick={this.toggleDraw.bind(this)}>Draw Area</button>
      <div className='main-body'>
        <div className='mapcontainer'>
          <GoogleMapDrawFilter
            markers={this.props.activities}
            drawMode={this.state.draw}
            handleReturnedMarkers={this.handleReturnedMarkers.bind(this)
            }>
          </GoogleMapDrawFilter>
        </div>
      </div>
      <div>
        {this.renderMarkerInfo.bind(this)()}
      </div>
    </div>
  );
}
}
const mapStateToProps = (state) => {
  return {
    activities: state.activities,
  }
};
const mapDispatchToProps = (dispatch) => ({
  fetchActivities: (path) => dispatch(fetchActivities(path)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AllActivities);
