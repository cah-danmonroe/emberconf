import Component from '@ember/component';

export default Component.extend({
  classNames: ["speaker-sessions", "switchable"],
  classNameBindings: ['isOpen:open'],
  isOpen: false,

  actions: {
    toggleOpen() {
      this.toggleProperty('isOpen')
    }
  }

});
