'use strict';
require('dotenv-safe').config({
  example: '.env.sample'
});

module.exports = function (environment) {
  let ENV = {
    modulePrefix: 'leaflet-maps',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false,
      },
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
      ALTAN_GEOMAP_API_KEY: process.env.ALTAN_GEOMAP_API_KEY
    },
    'place-autocomplete': {
      exclude: false,
      key: process.env.GOOGLE_PLACES_API_KEY,
      client: '',
      version: 3.27, // Optional - if client is set version must be above 3.24
      language: 'en', // Optional - be default will be based on your browser language
      region: 'MX', // Optional
      contentForType: 'head' // Optional - Specifies which conten
    },
  };

  if (environment === 'development') {
    ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
