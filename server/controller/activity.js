const Activity = require('../model/ActivitySchema');


exports.createActivity = function () {
  console.log(this.request.body);
  const details = JSON.parse(this.request.body.details);
  const coords = this.request.body.coords;
  const icon = this.request.body.icon;

  const newActivity = new Activity({
    title: details.title,
    info:details.details,
    type:details.activityType,
    latLng:coords,
    icon:icon
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
  let query;
  this.params.type==='all' ? query='' :query = this.params;


  return Activity.find(query)
  .then(function (content) {
    console.log(content);
    this.response.body = content;
  }.bind(this))
  .catch(function (err) {
    console.log(err);
    return err;
  });
};
