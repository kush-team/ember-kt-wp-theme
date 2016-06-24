import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {

  this.resource('post', function() {
    this.route('show', {path: '/:post_slug'});
  });
  this.resource('term', function() {
    this.route('show', {path: '/:term_slug'});
  }); 
  this.resource('page', function() {
    this.route('show', {path: '/:page_slug'});
  });    
});


export default Router;
