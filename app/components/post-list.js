import Ember from 'ember';

export default Ember.Component.extend({
	sorted: function(){
        var posts = this.get("posts").sortBy("acf.order");
        var termPost = this.get("rootPost");
        if (termPost !== undefined){
        	posts.removeObject(posts.findBy("id",termPost.id))
    	}
        return posts;
    }.property()
});