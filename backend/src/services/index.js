const datas = require('./datas/datas.service.js');
const oltps = require('./oltps/oltps.service.js');
module.exports = function (app) {
app.configure(datas);
app.configure(oltps);
}