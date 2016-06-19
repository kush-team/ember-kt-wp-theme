import Ember from 'ember';

export default Ember.Controller.extend({
	isShowMenu: false,
	isShowSearch: false,
	isHome: false,

	getCurrentURL: function () {
		this.set('isHome', false);

		if (RegExp('index').test(this.get('currentPath'))) {
			this.set('isHome', true);
		}
		
		}.observes('currentPath'),
});