import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNameBindings: [':item'],
  isOpen: false,

  slug: Ember.computed('item' , function() {
      var slug = "";
      var title = this.get('item').get('title');
      var titleLower = title.toLowerCase();
      slug = titleLower.replace(/e|é|è|ẽ|ẻ|ẹ|ê|ế|ề|ễ|ể|ệ/gi, 'e');
      slug = slug.replace(/a|á|à|ã|ả|ạ|ă|ắ|ằ|ẵ|ẳ|ặ|â|ấ|ầ|ẫ|ẩ|ậ/gi, 'a');
      slug = slug.replace(/o|ó|ò|õ|ỏ|ọ|ô|ố|ồ|ỗ|ổ|ộ|ơ|ớ|ờ|ỡ|ở|ợ/gi, 'o');
      slug = slug.replace(/u|ú|ù|ũ|ủ|ụ|ư|ứ|ừ|ữ|ử|ự/gi, 'u');
      slug = slug.replace(/đ/gi, 'd');
      slug = slug.replace(/\s*$/g, '');
      slug = slug.replace(/\s+/g, '-');
      return slug;
  }),

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
