const mongoose = require('mongoose');


const ActivitySchema =  new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  details: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },

  latLng:
    {
      lat: {type: Number, required: true},
      lng: {type: Number, required: true}
    }
}, {
  collection: 'activities',
  safe: true
});

module.exports = mongoose.model('activity', ActivitySchema);
