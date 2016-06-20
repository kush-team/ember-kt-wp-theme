import Ember from 'ember';

export default Ember.Route.extend({
	model: function (params) {
      return Ember.RSVP.hash({
          post: this.store.find('post', params.post_id),
          terms: this.store.find('post', params.post_id).then(function(data){
          	return data.get("categories");
          })
      });		
	}
});