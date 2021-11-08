import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | map-coverage', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:map-coverage');
    assert.ok(route);
  });
});
