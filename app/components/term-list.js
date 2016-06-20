import Ember from 'ember';

export default Ember.Component.extend({
	sorted: function(){
        var terms = this.get("terms").sortBy("acf.order");
        return terms;
    }.property('terms')
});