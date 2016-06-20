import Ember from 'ember';

export default Ember.Component.extend({
	showCategory: false,
	highlighting: false,
	
	actions: {
		showPost: function (postId) {
			this.sendAction();
			this.get('router').transitionTo('post.show', postId);
		},

		showTerm: function (termId) {
			this.sendAction();
			this.get('router').transitionTo('sub-term.show', termId);
		},		
	},

	category: Ember.computed('post.categories.@each', function () {
		return this.get('post').get('categories').objectAt(0);
	}),

	excerptSafe: Ember.computed('post.excerpt', function () {
		return this.get('post.excerpt').replace(/(<a(.*)>)*(<\/a>)/, "");
	}),
	
	didInsertElement: function () { 
	  this._super();
	  if (this.get('highlighting') === true) { 
	      //Aca usar Jquery para hightlightear cualquier elemento
	      this.$().highlight(this.get('query'));
	  } 
	}
});
