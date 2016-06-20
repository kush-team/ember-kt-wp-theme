import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNameBindings: [':ui', ':fixed', ':menu', 'isHome:-home'],

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
