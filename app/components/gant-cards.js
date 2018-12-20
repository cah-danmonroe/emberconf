import Component from '@ember/component'

export default Component.extend({

  classNameBindings: ['isLoaded:loaded'],

  elementId: 'gantt-cards',

  didInsertElement() {
    this._super(...arguments);

    this.set('isLoaded', true);
  }

})
