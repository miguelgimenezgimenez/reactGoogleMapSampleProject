const Activity = require('../model/ActivitySchema');


exports.createActivity = function () {
  const details = JSON.parse(this.request.body.data.details);
  const coords = this.request.body.data.coords;

  const newActivity = new Activity({
    title: details.title,
    info:details.details,
    type:details.activityType,
    latLng:coords,
    icon:details.icon
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
