const router = require('koa-router')();
const user = require('./controller/user');
const activity = require('./controller/activity');


router.get('/', function  () {
  this.body = 'Hello World!';
});
router.get('/home',user.login);

router.get('/fetchActivities/:type', activity.fetchActivities);

router.post('/login', user.login);
router.post('/newuser', user.newUser);
router.post('/createActivity', activity.createActivity);

module.exports=router;
