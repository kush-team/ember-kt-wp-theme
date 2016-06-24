import Ember from 'ember';
import GoBackMixin from 'ember-smart-go-back/mixins/application-route';

export default Ember.Route.extend(GoBackMixin, {
	model: function () {
		var store = this.get('store');
		return store.find('menu', {slug: 'primary_menu'}).then(function (menus) {
			if (menus.get('content')) {
				return store.find('menu', menus.get('content').objectAt(0).get('id')).then(function (menu) {
					return menu.reload();
				});
			} else {
				return null;
			}
		});
	},

	actions: {
   		 willTransition: function(transition) { 
   		 	this.controller.set('isShowMenu', false);
   		 	this.controller.set('isShowSearch', false);
   		 }
	}
});
