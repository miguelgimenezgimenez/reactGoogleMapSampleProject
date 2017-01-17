import React, { Component } from 'react'
import Map from 'react-google-map-draw-filter';
import { Button, Checkbox, Form, Input, Message, Radio, Select, TextArea } from 'semantic-ui-react'
import '../Styles/CreateActivityForm.css';
import {connect} from 'react-redux';
import {fetchActivities, createActivity} from '../redux/actions';


const type = [
  { text: 'Rewarded Activity', value: 'reward' },
  { text: 'Leisure Activity', value: 'leisure' },
  { text: 'Cultural Activity', value: 'cultural' },
  { text: 'Sports/Adventure Activity', value: 'sports' },
]
let marker;
const latLng={};

class FormExampleOnSubmit extends Component {
  constructor () {
    super();
    this.state = {
      formData: {},
      lat:{},
      lng:{}
    };
  }


  handleSubmit (e,{formData}) {
    e.preventDefault()
    const data={} ;
    data.details=(JSON.stringify(formData, null, 2));
    data.coords={lat:this.state.lat,lng:this.state.lng};
    console.log(formData.activityType);
    this.setState({ formData:formData })
    switch (formData.activityType) {
      case 'cultural':
      data.icon='../../images/culture.png';
        break;

      case 'leisure':
      data.icon='../../images/leisure.png';
        break;

      case 'sports':
      data.icon='../../images/sports.png';
        break;

      case 'rewarded':
      data.icon='../../images/cashicon.png';
        break;

      default:

    }
    this.props.createActivity(data);
  }


  handleReturnedMarkers(marker){
    this.setState({
      ...marker
    });
  }

  render() {
    const { formData, value } = this.state
    return (<div>
      <h1>Create Activity</h1>
      <Form onSubmit={this.handleSubmit.bind(this)}>
        <Form.Group widths='equal'>
          <Form.Input name='title' placeholder='Title' />
          <Form.Select  name='activityType' options={type} placeholder='Activity Type'/>
        </Form.Group>
        <Form.Group widths='2'>
          <Form.Field>
            <div className='map-container'>
              <Map
                mapStyle={{height:400,width:800}}
                drawMode={false}
                insertMarker={true}
                handleReturnedMarkers={this.handleReturnedMarkers.bind(this)}
              />
            </div>
          </Form.Field>
        </Form.Group>
        <Form.TextArea name='details'  placeholder='Activity Details' rows='3' />
        <Button primary type='submit'>Submit</Button>
      </Form>
    </div>
  )
}
}
const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({
  createActivity: (data) => dispatch(createActivity(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(FormExampleOnSubmit);
