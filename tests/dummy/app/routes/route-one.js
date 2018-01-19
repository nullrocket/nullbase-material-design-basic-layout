import Ember from 'ember';

export default Ember.Route.extend({
  actions : {
    buildClasses(){
    alert('buildem')
    }
  },
  renderTemplate(){
    this._super(...arguments);


    this.render('dummy-route-one-content',{
      outlet:'content',
      into:'application'
    }) ;
  }
});
