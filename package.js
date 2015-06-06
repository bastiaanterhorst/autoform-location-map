Package.describe({
  name: 'bastiaanterhorst:autoform-location-map',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Set lat/lon coordinates using Google Maps',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use([
    'coffeescript',
    'templating',
    'aldeed:autoform@5.3.0',
    'dburles:google-maps@1.1.1',
    'mquandalle:jade'
  ], 'client');

  api.addFiles([
    'lib/client/autoform-location-map.coffee',
    'lib/client/autoform-location-map.jade'
  ], 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('bastiaanterhorst:autoform-location-map');
  api.addFiles('autoform-location-map-tests.js');
});
