import React, {Component} from 'react';
import {connect} from 'react-redux';
import inside from 'point-in-polygon';
import GoogleMapDrawFilter from '../aux/GoogleMapDrawFilter.js';
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
    };
  }
  toggleDraw () {
    this.setState(
      {draw:!this.state.draw}
    )
  }
  componentDidMount(){
    this.props.fetchActivities();
  }

  handleReturnedMarkers (markers) {
    console.log(markers);

  }

  handleClick(map) {


  }

  render() {

    return (<div>
      <button onClick={this.toggleDraw.bind(this)}>Draw Area</button>
      <div className='main-body'>
        <div className='mapcontainer'>
          <GoogleMapDrawFilter
            apiKey='AIzaSyBbnApuQR5k2uupNDdyAGOHaG-kp9FClKU'
            markers={this.props.activities}
            drawMode={this.state.draw}
            handleReturnedMarkers={this.handleReturnedMarkers
            }>
          </GoogleMapDrawFilter>
        </div>
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
  fetchActivities: () => dispatch(fetchActivities()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AllActivities);
