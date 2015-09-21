import DS from 'ember-data';

export default DS.Model.extend({
  name:    DS.attr('string'),
  street1: DS.attr('string'),
  street2: DS.attr('string'),
  city:    DS.attr('string'),
  state:   DS.attr('string'),
  zip:     DS.attr('string')  //string not number
});
