import Ember from 'ember';

export default Ember.Component.extend({
	subterm: Ember.computed('post.categories.@each', function () {
		if( this.get('post').get('categories').objectAt(1) === undefined ){
			return this.get('post').get('categories').objectAt(0);
		}

		if(this.get('post').get('categories').objectAt(0).get("parent") !== null){
			return this.get('post').get('categories').objectAt(0);
		}else{
			return this.get('post').get('categories').objectAt(1);
		}
	})
});
