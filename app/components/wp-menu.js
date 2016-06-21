import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNameBindings: [':ui', ':container'],

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
