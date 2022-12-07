// Initializes the `oltps` service on path `/api/oltps`
const { Oltps } = require('./oltps.class');
const createModel = require('../../models/oltps.model');
const hooks = require('./oltps.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    multi:['create']

  };

  // Initialize our service with any options it requires
  app.use('/api/oltps', new Oltps(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('api/oltps');

  service.hooks(hooks);
};
