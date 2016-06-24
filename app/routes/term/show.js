import Ember from 'ember';

export default Ember.Route.extend({
	model: function (params) {
      return Ember.RSVP.hash({
          term: this.store.find('term', {filter: {slug: params.term_slug}}).then(function (terms) { return terms.content.objectAt(0) }),
          posts: this.get('store').find('post', {filter: {category_name: params.term_slug}})
      });		
	}
});