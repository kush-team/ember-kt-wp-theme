import Ember from 'ember';

export default Ember.Route.extend({
	model: function (params) {
	  var route = this;
      return Ember.RSVP.hash({
        post: this.get('store').find('post', {filter: {p: params.post_id}}).then(function(results){
		  return results.get('firstObject');
		}),

        posts: this.get('store').find('post', {filter: {p: params.post_id}}).then(function(results){
		  return results.get('firstObject');
		}).then(function(results){
			if( results.get('categories').objectAt(1) === undefined ){
				return results.get('categories').objectAt(0);
			}

			if(results.get('categories').objectAt(0).get("parent") !== null){
				return results.get('categories').objectAt(0);
			}else{
				return results.get('categories').objectAt(1);
			}
		}).then(function(results){
			return route.get('store').find('post', {filter: {cat: results.id}});
		}).then(function(results){
			var posts = results.sortBy("acf.order");
			posts.forEach(function(post,index){
				if(post.get("data.tags").findBy("data.slug","subterm") !== undefined){
					posts.removeObject(post);
					return posts;
				}
			})
			return posts;
		})
      });		
	}
});