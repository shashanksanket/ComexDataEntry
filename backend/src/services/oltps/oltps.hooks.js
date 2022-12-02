const { authenticate } = require('@feathersjs/authentication').hooks;
const TotalValues = async function(context){
const { FeathersError } = require("@feathersjs/errors");

  if (context.params.query && context.params.query.$total){
    delete context.params.query.$total
    context.params.paginate = false
    context.params._populate = true
  }
}
const limitDelete = async function(context){
  if (context.params.users.role=='ENDUSER'){
    throw new FeathersError(
      "Not A Valid User",
      "Error",
      401,
      "CMS",
      { msg: "Not Authenticated" }
    );
  }
  
}

module.exports = {
  before: {
    all: [authenticate("jwt")],
    find: [TotalValues],
    get: [],
    create: [limitDelete],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
