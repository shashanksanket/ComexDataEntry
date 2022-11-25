const datas = require('./datas/datas.service.js');
const oltps = require('./oltps/oltps.service.js');
const users = require('./users/users.service.js');
const authmanagement = require('./authmanagement/authmanagement.service.js');
module.exports = function (app) {
  app.configure(datas);
  app.configure(oltps);
  app.configure(users);
  app.configure(authmanagement);
}