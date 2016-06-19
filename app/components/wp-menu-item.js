import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  isOpen: false,

  isCustom: Ember.computed('item' , function() {
    if (this.get('item')) {
      return this.get('item').get('object') === 'custom';
    }
    return false;
  }),

  link: Ember.computed('item' , function() {
  	var route = 'index';
    if (this.get('item')) {
    	switch (this.get('item').get('object')) {
    		case 'page':
    			route = 'page.show';
    			break;  			
    		case 'post':
    			route = 'post.show';
    			break;  			
    		case 'category':
          if (this.get('item').get('attr') === "subterm") {
            route = 'sub-term.show';
          } else { 
    			  route = 'term.show';
          }
    			break;  			  			  			
    		default:
    			break;
    	}
    }
    return route;
  })
});
