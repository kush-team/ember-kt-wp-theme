import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'ul',
  classNameBindings: [':menu-wp', 'isHome:-home'],

  isShowMenu: false,
  show: false,
  isHome: false,
  
  actions: {
    toggle: function () {
      this.toggleProperty('show');
      this.toggleProperty('isShowMenu');
    },    
  },

});
