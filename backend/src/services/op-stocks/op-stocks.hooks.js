const { FeathersError } = require('@feathersjs/errors');

const { authenticate } = require('@feathersjs/authentication').hooks;

const assignUserId = async function(context){
  if (context.data.Title && context.params.users.role=='OPUSER'){
    context.data['userId'] = context.params.users.id
  }
  else{
    throw new FeathersError("Not A Valid User",
    "Error",
    401,
    "CMS",
    { msg: "Not Authenticated" })
  }
}

const TotalValues = async function(context){

  if (context.params.query && context.params.query.$total){
    delete context.params.query.$total
    context.params.paginate = false
    context.params._populate = true
  }
}
const limitDelete = async function(context){
  if (context.params.users.role=='ENDUSER' || context.params.users.role=='OPUSER'){
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
    all: [ authenticate('jwt') ],
    find: [TotalValues],
    get: [],
    create: [assignUserId],
    update: [],
    patch: [],
    remove: [limitDelete]
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
