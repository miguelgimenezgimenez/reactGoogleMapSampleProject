const User = require('../model/UserSchema');



exports.newUser = function * (next) {

  const data = (this.request.body);
  try {
    this.response.body =yield User.create({
      name: data.firstName,
      email:data.emailAddress
    });

  } catch (e) {
    console.log(e);
  }
};

exports.login = function * (next) {
  const person = this.request.body;
  try {
    const response =yield User.find({
      email:person.emailAddress
    })
    if (response.length>0) {
      this.response.body = response[0];
    }
  } catch (e) {
    console.log(e);
  }
};
