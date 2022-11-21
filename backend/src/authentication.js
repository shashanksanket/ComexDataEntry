const { AuthenticationService, JWTStrategy } = require('@feathersjs/authentication');
const { LocalStrategy } = require('@feathersjs/authentication-local');
const { expressOauth } = require('@feathersjs/authentication-oauth');
const { FeathersError } = require('@feathersjs/errors');
// const hooks = require('./services/authmanagement/authmanagement.hooks');
const isVerifiedUser = async function (context) {
  console.log("verify Context -> ", context);
  if (context.result.users.isVerified == false) {
    throw new FeathersError(
      'User not verified',
      'NotAllowedError',
      405,
      'YourIndianCartErrors',
      {}
    );
  }
};

module.exports = app => {
  const authentication = new AuthenticationService(app);

  authentication.register('jwt', new JWTStrategy());
  authentication.register('local', new LocalStrategy());

  app.use('/api/v1/authentication', authentication);
  app.configure(expressOauth());
  app.service('/api/v1/authentication').hooks({
    before: {
      create: [
        // authentication.hooks.authenticate(config.strategies)
      ],
      remove: [
        // authentication.hooks.authenticate('jwt')
      ]
    },
    after: {
      create: [
        isVerifiedUser
      ],
    }
  });
};
