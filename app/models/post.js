import PostModel from 'ember-cli-to-wp-theme/models/post';

export default PostModel.extend({
  acf: DS.attr(),

  shareText: Ember.computed('acf', function () {
  	if (this.get('acf.plain_excerpt')) {
  		return this.get('acf.plain_excerpt');
  	} else {
  		return " ";
  	}
  }),
});
