import Component from '@ember/component';
import { later } from '@ember/runloop';

export default Component.extend({
  tagName: '',

  didInsertElement() {
    this._super(...arguments);

    // debugger;
    later(this, function() {
      let illustrations = document.getElementsByClassName("illustration");
      illustrations[0].classList.add("loaded");
    }, 300);
  }
});
