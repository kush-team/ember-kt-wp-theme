import Ember from 'ember';

export default Ember.Component.extend({

	postBefore: Ember.computed('post' ,function(){
		var post = this.get("post");
		var posts = this.get("posts");
		var index = parseInt(post.get("acf.order")) - 1; 
		return posts.findBy("acf.order",index.toString());
	}),

	postAfter: Ember.computed('post' ,function(){
		var post = this.get("post");
		var posts = this.get("posts");
		var index = parseInt(post.get("acf.order")) + 1; 
		return posts.findBy("acf.order",index.toString());
	})
});
