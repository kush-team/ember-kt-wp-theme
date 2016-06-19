import Ember from 'ember';
import GoBackMixin from 'ember-smart-go-back/mixins/application-route';

export default Ember.Route.extend(GoBackMixin, {
	model: function () {
		return this.store.find('menu', 2);
	},
});
