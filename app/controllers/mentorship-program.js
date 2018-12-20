import Controller from '@ember/controller';
import { equal } from '@ember/object/computed';

export default Controller.extend({

  evangelismActive: equal('tab', 'evangelism'),
  whwActive: equal('tab', 'whw'),
  generalActive: equal('tab', 'general'),

  tab: Object.freeze("evangelism"),

  actions: {
    tabClick(tab) {
      this.set('tab', tab);
    }
  }

});
