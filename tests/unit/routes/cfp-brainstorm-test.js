import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | cfp-brainstorm', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:cfp-brainstorm');
    assert.ok(route);
  });
});
