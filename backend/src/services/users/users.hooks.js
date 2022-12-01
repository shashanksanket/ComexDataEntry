const { authenticate } = require('@feathersjs/authentication').hooks;
const { hashPassword, protect } =
  require("@feathersjs/authentication-local").hooks;
const verifyHooks = require("feathers-authentication-management").hooks;

const TotalValues = async function(context){
  if (context.params.query && context.params.query.$total){
    delete context.params.query.$total
    context.params.paginate = false
    context.params._populate = true
  }
}
module.exports = {
  before: {
    all: [ ],
    find: [TotalValues, authenticate("jwt")],
    get: [authenticate("jwt")],
    create: [hashPassword("password"), verifyHooks.addVerification("/api/authmanagement"),],
    update: [authenticate("jwt"),hashPassword("password")],
    patch: [authenticate("jwt")],
    remove: [authenticate("jwt")]
  },

  after: {
    all: [protect("password"),],
    find: [],
    get: [],
    create: [verifyHooks.removeVerification(),],
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
