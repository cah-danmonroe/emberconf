import Component from '@ember/component'
import { later } from '@ember/runloop';

export default Component.extend({

  classNameBindings: ['isLoaded:loaded'],

  elementId: 'gantt-cards',

  didInsertElement() {
    this._super(...arguments);

    later(this, function() {
      this.set('isLoaded', true);
    }, 300);
  }

})
