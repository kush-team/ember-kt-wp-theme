import Ember from 'ember';

export default Ember.Route.extend({
	model: function (params) {
      return Ember.RSVP.hash({
          term: this.store.find('term', params.term_id),
          post: this.get('store').find('post', {filter: {cat: params.term_id, tag: "subterm"}}).then(function(results){
				  return results.get('firstObject');
				}),
          posts: this.get('store').find('post', {filter: {cat: params.term_id}})
      });		
	}
});