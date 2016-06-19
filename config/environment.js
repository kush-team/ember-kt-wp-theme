/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'ember-kt-wp-theme',
    environment: environment,
    baseURL: '/',
    locationType: 'hash',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;

     ENV['contentSecurityPolicy'] = {
      'default-src': "* 'unsafe-inline' 'unsafe-eval'",
      'script-src': "* 'unsafe-inline' 'unsafe-eval'",
      'font-src': "* 'unsafe-inline' 'unsafe-eval'",
      'connect-src': "*",
      'img-src': "* 'unsafe-inline' 'unsafe-eval'",
      'style-src': "* 'unsafe-inline' 'unsafe-eval'",
      'media-src': "* 'unsafe-inline' 'unsafe-eval'",
    };
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
