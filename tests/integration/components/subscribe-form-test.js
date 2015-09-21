import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import i18nInitializer from "bbs/instance-initializers/ember-i18n";

moduleForComponent('subscribe-form', 'Integration | Component | subscribe form', {
  integration: true,

  setup() {
    i18nInitializer.initialize(this);
  }
});

test('it renders', function(assert) {
  assert.expect(0);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{subscribe-form}}`);

});
