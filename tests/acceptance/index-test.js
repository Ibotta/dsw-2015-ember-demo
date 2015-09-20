import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'bbs/tests/helpers/start-app';

module('Acceptance | index', {
  beforeEach: function() {
    this.application = startApp();
  },

  afterEach: function() {
    Ember.run(this.application, 'destroy');
  }
});

test('visiting /index', function(assert) {
  assert.expect(3);
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
    let headline = find('.home-feature h1');
    assert.equal(headline.length, 1);
    assert.equal(headline.text(), 'Frozen Bananas!');
  });
});
