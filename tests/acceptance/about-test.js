import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'bbs/tests/helpers/start-app';

module('Acceptance | about', {
  beforeEach: function() {
    this.application = startApp();
  },

  afterEach: function() {
    Ember.run(this.application, 'destroy');
  }
});

test('visiting /about from index', function(assert) {
  visit('/');
  click('.about-link img');

  andThen(function() {
    assert.equal(currentURL(), '/about');
  });
});
