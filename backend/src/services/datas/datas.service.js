// Initializes the `datas` service on path `/api/datas`
const { Datas } = require('./datas.class');
const createModel = require('../../models/datas.model');
const hooks = require('./datas.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    multi:['create']
    
  };

  // Initialize our service with any options it requires
  app.use('/api/datas', new Datas(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('api/datas');

  service.hooks(hooks);
};
