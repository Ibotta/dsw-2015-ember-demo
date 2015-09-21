import DS from 'ember-data';

export default DS.Model.extend({
  email:     DS.attr('string'),
  marketing: DS.attr('boolean', {
    defaultValue: true
  })
});
