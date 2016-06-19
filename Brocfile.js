/* global require, module */
 
var EmberApp = require('ember-cli/lib/broccoli/ember-app');
 
var app = new EmberApp({
   fingerprint: { }
});

module.exports = app.toTree();