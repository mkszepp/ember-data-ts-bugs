import { setupTest } from 'ember-data-ts-errors/tests/helpers';
import { module, test } from 'qunit';

module('Unit | Model | pet', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('pet', {});
    assert.ok(model, 'model exists');
  });
});
