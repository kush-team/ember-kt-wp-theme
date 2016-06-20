import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		showSubTerm: function (termId) {
			this.sendAction();
			this.get('router').transitionTo('sub-term.show', termId);
		}
	},

	subterm: Ember.computed('post.categories.@each', function () {
		if(this.get('post').get('categories').objectAt(0).get("parent") !== null){
			return this.get('post').get('categories').objectAt(0);
		}else{
			return this.get('post').get('categories').objectAt(1);
		}
	}),

	excerptSafe: Ember.computed('post.excerpt', function () {
		return this.get('post.excerpt').replace(/(<a(.*)>)*(<\/a>)/, "");
	})
});
