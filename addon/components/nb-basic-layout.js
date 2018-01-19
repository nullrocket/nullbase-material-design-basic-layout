import Ember from 'ember';
import layout from './template';

import ThemedComponent from 'nullbase-core/mixins/nb-themed-component';


export default Ember.Component.extend(ThemedComponent, {
  layout,
  classNames: [ 'nb-basic-layout' ],
  elevation: 'elevation-2dp',
  classNameBindings: [ 'type','stateClass' ],
  isLeftSidebarOpen: false,
  isRightSidebarOpen: false,
  floatLeftSidebar: false,
  fullHeightLeftSidebar: false,
  floatRightSidebar: false,
  fullHeightRightSidebar: false,
  footerShowing: false,
  headerShowing:true,
  type: 'standard',
  leftSidebarWidth: 300,
  leftSidebarOutletName: "left-sidebar",
  rightSidebarOutletName: "right-sidebar",
  useLiquidFire:false,
  contentOutletName: "content",
  headerOutletName: "header-content",
  footerOutletName : "footer-content",
  leftRailNavigationOutletName:"left-rail-content",
  leftRailNavigationShowing:true,
  gestures:Ember.inject.service(),

  init(){
    this._super(...arguments);
  },

  stateClass : Ember.computed('isLeftSidebarOpen','isRightSidebarOpen','floatRightSidebar','fullHeightRightSidebar', 'floatLeftSidebar', 'fullHeightLeftSidebar','footerShowing', 'headerShowing','snackbar.showing','leftRailNavigationState',function () {

    let leftSidebarPinnedState = this.get('floatLeftSidebar') ? 'lsf' : 'lsp';
    let leftSidebarHeightState =  this.get('fullHeightLeftSidebar') ?'lsfh': 'lsch';
    let rightSidebarPinnedState = this.get('floatRightSidebar') ? 'rsf' : 'rsp';
    let rightSidebarHeightState = this.get('fullHeightRightSidebar')?'rsfh': 'rsch';
    let leftSidebarOpenState = this.get('isLeftSidebarOpen') ? 'lso' : 'lsc';
    let rightSidebarOpenState = this.get('isRightSidebarOpen') ? 'rso' : 'rsc';
    let headerState = this.get('headerShowing') ?'ho':'hc';
    let footerState = this.get('footerShowing') ?'fo':'fc';
    let snackbarState = this.get('snackbar.showing') ? "sbo":'';
    let leftRailNavigationState = this.get('leftRailNavigationShowing')?'lrns':'lrnh';
    return [ leftSidebarPinnedState,leftSidebarHeightState,rightSidebarPinnedState,leftSidebarOpenState,rightSidebarHeightState,rightSidebarOpenState,headerState,footerState,snackbarState,leftRailNavigationState].sort().join(" ");


  }),

  actions :{
    leftPlaceholderTap(){
      this.sendAction('attrs.on-left-placeholder-tap', ...arguments);
    }
  },


  _themeProps: null,
  _themeProperties: [
    'attrs.header-background-color',
    'attrs.left-sidebar-width',
    'attrs.right-sidebar-width',
      'attrs.left-sidebar-background-color'

  ],
  didInsertElement(){
    let self = this;
    this._tap = function ( event ) {
      event.preventDefault();
      event.stopPropagation();

        self.send("leftPlaceholderTap", event);

    };

    var leftPlaceholderElement = this.get('element').querySelector('.left-wrapper .placeholder');
    this.get('gestures').addEventListener(leftPlaceholderElement, 'tap', this._tap);

  }

});
