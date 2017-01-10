const User = require('../model/UserSchema');



exports.newUser = function * (next) {
  //TODO this.body ===this.request.body
  const data = this.body.data;
  this.body=yield User.create({
    name: data.firstName,
    email:data.emailAddress
  })

};


exports.login = function * (next) {
  const person = this.request.body;
  console.log(person);
    this.body = yield User.find({
        email:person.emailAddress
    });
  

};
