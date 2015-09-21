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

test('subscribe for updates', function(assert) {
  visit('/');

  fillIn(
    '.subscribe-container .input-field input',
    'veep@whitehouse.gov'
  );
  click('.card-action button');
  andThen(() => {
    // stays on index
    assert.equal(currentURL(), '/');

    assert.equal(
      find('.subscribe-container .card-title').text().trim(),
      'Thanks for signing up.'
    );
    assert.equal(
      find('.card p').text().trim(),
      'We\'ll send all of our updates to veep@whitehouse.gov.'
    );
  });

});
