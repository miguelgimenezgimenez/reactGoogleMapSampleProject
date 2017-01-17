const mongoose = require('mongoose');


const ActivitySchema =  new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  info: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: false
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
