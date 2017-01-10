const Activity = require('../model/ActivitySchema');


exports.createActivity = function () {
  const details = JSON.parse(this.request.body.data.details);
  //TODO DONT NEED TO JSON PARSE
  const coords = this.request.body.data.coords;
  console.log(details, coords);

  const newActivity = new Activity({
    title: details.title,
    details:details.details,
    type:details.activityType,
    latLng:coords,
  });
  return newActivity.save()
  .then(function () {
    this.response.body = details;
  }.bind(this))
  .catch(err=> {
    console.log(err);
    return err;
  });
};

exports.fetchActivities = function() {
  console.log('GET');
  return Activity.find()
  .then(function (content) {
    this.response.body = content;
  }.bind(this))
  .catch(function (err) {
    console.log(err);
    return err;
  });
};
