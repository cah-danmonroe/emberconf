import Controller from '@ember/controller';
import { equal } from '@ember/object/computed';

export default Controller.extend({

  showBecomeSponsor: equal('tab', 'newsponsor'),

  actions: {
    tabClick(tab) {
      this.set('tab', tab);
    }
  }

});
