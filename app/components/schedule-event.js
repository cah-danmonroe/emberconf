import Component from '@ember/component'

export default Component.extend({
  tagName: 'li',
  classNames: ['event'],

  actions: {
    toggleOpen() {
      if (this.get('event.description')) {
        this.toggleProperty('isOpen')
      }
    }
  }

})
