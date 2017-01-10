const mongoose = require('mongoose');


const UserSchema =  new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    index: {unique: true}
  },
  events: [
    {
      title: {type: String, required: false},
      msg: {type: String, required: false}
    }]
}, {
  collection: 'users',
  safe: true
});

const user = mongoose.model('user', UserSchema);
module.exports = user;
