import Ember from 'ember';

export default Ember.Route.extend({
	model: function (params) {
      return Ember.RSVP.hash({
          page: this.store.find('page', {filter: {name: params.page_slug} }).then(function (pages) { return pages.objectAt(0) }),
      });		
	}
});