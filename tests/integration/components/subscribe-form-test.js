import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import i18nInitializer from "bbs/instance-initializers/ember-i18n";

moduleForComponent('subscribe-form', 'Integration | Component | subscribe form', {
  integration: true,

  beforeEach() {
    i18nInitializer.initialize(this);
  }
});

test('it renders', function(assert) {
  assert.expect(3);

  this.render(hbs`{{subscribe-form}}`);

  assert.equal(
    this.$('.card-title').text().trim(),
    'Subscribe for updates on the stand.'
  );

  assert.equal(
    this.$('.input-field label').text().trim(),
    'Please enter your email address.'
  );

  assert.equal(
    this.$('.materialize-checkbox label').text().trim(),
    'Yes I would like to receive marketing material from Bluth sponsors.'
  );

});
