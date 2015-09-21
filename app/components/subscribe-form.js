import Ember from 'ember';

export default Ember.Component.extend({
  i18n: Ember.inject.service('i18n'),
  title: Ember.computed('saved', function() {
    if (this.get('saved')) {
      return this.get('i18n').t('subscribe.successHeader');
    } else {
      return this.get('i18n').t('subscribe.header');
    }
  }),
  saved: false,
  actions: {
    subscribe() {
      this.set('saving', true);
      this.get('model').save().then(() => {
        this.set('saving', false);
        this.set('saved', true);
      }, () => {
        //error handling here
      });
    }
  }
});
