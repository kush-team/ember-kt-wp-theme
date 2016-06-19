import Ember from 'ember';

export default Ember.Controller.extend({
	posts: [],
	query: '',
	searching: false,
	searched: false,
	interval: null,
	show: false,
	isShowMenu: false,



	actions: {
		open: function () {
			this.set('show', true);
			this.toggleProperty('isShowMenu', true);
		},

		close: function () {
			this.set('show', false);
			this.toggleProperty('isShowMenu', false);
		},		
	},

	visibilityChanged: function () {
		if (this.get('show') === false) {
			this.set('post', []);
			this.set('query', '');
			this.set('searching', false);
			this.set('searched', false);
		}
	}.observes('show'),

	
});