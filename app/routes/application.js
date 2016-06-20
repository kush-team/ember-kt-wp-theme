import Ember from 'ember';
import GoBackMixin from 'ember-smart-go-back/mixins/application-route';

export default Ember.Route.extend(GoBackMixin, {
	model: function () {
		return this.store.find('menu', 2);
	},

	actions: {
   		 willTransition: function(transition) { 
   		 	this.controller.set('isShowMenu', false);
   		 	this.controller.set('isShowSearch', false);
   		 }
	}
});
