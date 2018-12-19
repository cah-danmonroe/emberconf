import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | location-and-hotels', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:location-and-hotels');
    assert.ok(route);
  });
});
