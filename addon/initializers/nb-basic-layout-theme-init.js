
import forIn from "lodash/forIn";
import isNumber from "lodash/isNumber";
import Ember from 'ember';
import ThemeHandlerMixin from 'nullbase-core/mixins/nullbase-theme-handler';









var ThemeHandler = Ember.Object.extend(ThemeHandlerMixin, {

  className: 'nb-basic-layout',
  _insertedStyles: [],
  properties: {

    'header-background-color': {
      setGlobalCSSRule( themeProperties, selectorForThemeContext ){
        // TODO: Think about asserting on the color property being a valid css color property.

        let self = this;
        forIn(themeProperties, function ( color, buttonTypeClass ) {
          let rule = `.nb-basic-layout${selectorForThemeContext}.${buttonTypeClass} .header { 
                      background:${color};
                      }`;
          self.insertRule(rule, self);
        });
      },

      setInstanceCSSRule(){
        // TODO: Think about asserting on the color property being a valid css color property.

        this.insertRule('#' + this.get('elementId') + ' .header { background:' + this.get('attrs.left-sidebar-background-color') + ';}', this);
      }

    },
    'left-sidebar-background-color': {
      setGlobalCSSRule( color, selectorForThemeContext ){
        // TODO: Think about asserting on the color property being a valid css color property.

        let self = this;
       // _.forIn(themeProperties, function ( color, buttonTypeClass ) {
          let rule = `.nb-basic-layout${selectorForThemeContext} .left-sidebar > .inner { 
                      background:${color};
                      }`;
          self.insertRule(rule, self);
     //   });
      },

      setInstanceCSSRule(){
        // TODO: Think about asserting on the color property being a valid css color property.

        this.insertRule('#' + this.get('elementId') + ' .left-sidebar > .inner{ background:' + this.get('attrs.left-sidebar-background-color') + ';}', this);
      }

    },
    'left-sidebar-width': {
      setGlobalCSSRule( themeProperties, selectorForThemeContext ){


        let width = themeProperties;

        // TODO: change width to be a number and assert that it is a number, add the "px" in the rule template.
        // TODO: Explore allowing measurement types other than px.
        this.insertRule(`.nb-basic-layout${selectorForThemeContext} > .wrapper > .left-sidebar { width:${width};}`, this);
        this.insertRule(`.nb-basic-layout${selectorForThemeContext} > .header { left:${width};}`, this);
        this.insertRule(`.nb-basic-layout${selectorForThemeContext}.lso.lsch > .header { left:0px;}`, this);
        this.insertRule(`.nb-basic-layout${selectorForThemeContext}.lsc.lsch > .header { left:0px;}`, this);

        this.insertRule(`.nb-basic-layout${selectorForThemeContext}.lso.lsfh > .header { left:${width};}`, this);
        this.insertRule(`.nb-basic-layout${selectorForThemeContext}.lsc.lsfh > .header { left:0px;}`, this);
        this.insertRule(`.nb-basic-layout${selectorForThemeContext}.lso.lsfh > .footer { left:${width};}`, this);
        this.insertRule(`.nb-basic-layout${selectorForThemeContext}.lsc.lsfh > .footer { left:0px;}`, this);

        this.insertRule(`.nb-basic-layout${selectorForThemeContext} > .wrapper > .left-sidebar > .inner { width:${width};}`, this);


      },
      setInstanceCSSRule(){
        let elementId = this.get('elementId');
        let width = this.get('attrs.left-sidebar-width');
        Ember.assert("You must pass a number as the sidebar width",isNumber(width));
        // TODO: change width to be a number and assert that it is a number, add the "px" in the rule template.
        // TODO: Explore allowing measurement types other than px.
        this.insertRule('#' + elementId + '.lso > .wrapper > .left-sidebar { width:' + width + 'px;}', this);
        this.insertRule('#' + elementId + '.lsf.lso > .center-wrapper > .left-sidebar { width:0px;}', this);
        this.insertRule('#' + elementId + '.lso.lsch >  .header { left:0px;}', this);
        this.insertRule('#' + elementId + '.lsc.lsch >  .header { left:0px;}', this);
        this.insertRule('#' + elementId + '.lsc >  .header { left:0px;}', this);
        this.insertRule('#' + elementId + '.lso.lsfh >  .header { left:' + width + 'px;}', this);
        this.insertRule('#' + elementId + '.lso.lsfh >  .footer { left:' + width + 'px;}', this);
        this.insertRule('#' + elementId + '.lso > .wrapper > .left-sidebar > .inner { width:' + width + 'px;}', this);
      }


    },
    'right-sidebar-width': {
      setGlobalCSSRule( width, selectorForThemeContext ){

        // TODO: change width to be a number and assert that it is a number, add the "px" in the rule template.
        // TODO: Explore allowing measurement types other than px.
        this.insertRule(`.nb-basic-layout${selectorForThemeContext} > .wrapper > .right-sidebar { width:${width};}`, this);

        this.insertRule(`.nb-basic-layout${selectorForThemeContext} > .header { right:${width};}`, this);
        this.insertRule(`.nb-basic-layout${selectorForThemeContext}.rso.rsch > .header { right:0px;}`, this);
        this.insertRule(`.nb-basic-layout${selectorForThemeContext}.rsc.rsch > .header { right:0px;}`, this);

        this.insertRule(`.nb-basic-layout${selectorForThemeContext}.rso.rsfh > .header { right:${width};}`, this);
        this.insertRule(`.nb-basic-layout${selectorForThemeContext}.rsc.rsfh > .header { right:0px;}`, this);
        this.insertRule(`.nb-basic-layout${selectorForThemeContext}.rso.rsfh > .footer { right:${width};}`, this);
        this.insertRule(`.nb-basic-layout${selectorForThemeContext}.rsc.rsfh > .footer { right:0px;}`, this);

        this.insertRule(`.nb-basic-layout${selectorForThemeContext} > .wrapper > .right-sidebar > .inner { width:${width};}`, this);


      },
      setInstanceCSSRule(){
        let elementId = this.get('elementId');
        let width = this.get('attrs.right-sidebar-width');
        Ember.assert("You must pass a number as the sidebar width",isNumber(width));
        this.insertRule('#' + elementId + '.rso > .wrapper > .right-sidebar { width:' + width + 'px;}', this);
        this.insertRule('#' + elementId + '.rsf.rso > .center-wrapper > .right-sidebar { width:0px;}', this);
        this.insertRule('#' + elementId + '.rso.rsch >  .header { right:0px;}', this);
        this.insertRule('#' + elementId + '.rsc.rsch >  .header { right:0px;}', this);
        this.insertRule('#' + elementId + '.rsc >  .header { right:0px;}', this);
        this.insertRule('#' + elementId + '.rso.rsfh >  .header { right:' + width + 'px;}', this);
        this.insertRule('#' + elementId + '.rso.rsfh >  .footer { right:' + width + 'px;}', this);
        this.insertRule('#' + elementId + '.rso > .wrapper > .right-sidebar > .inner { width:' + width + 'px;}', this);
      }


    }
  }

});


var SnackbarService = Ember.Object.extend({
  showing:false,
  message:'',
  showSnackbar(message,type)
  {
    var self= this;
    this.set('snackbarType',type);
    this.set('message',message);
    this.set('showing',true);

    setTimeout(function(){
      self.set('showing',false);

    },3000);
  }

});

export function initialize( application ) {
  application.register('snackbar-service:service', SnackbarService, { instantiate: true });
  ['route','component:nb-basic-layout'].forEach(injectionTarget => {
    application.inject(injectionTarget, 'snackbar', 'snackbar-service:service');
  });
  application.register('nb-basic-layout-theme-init:main', ThemeHandler, { instantiate: true });
  application.inject('component:nb-basic-layout', '_themeHandler', 'nb-basic-layout-theme-init:main');
}


export default {
  after: 'theme-service-initializer',
  name: 'nb-basic-layout-theme-init',
  initialize
};
