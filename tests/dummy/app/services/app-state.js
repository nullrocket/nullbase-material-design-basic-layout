import Ember from 'ember';

export default Ember.Service.extend({
  isLeftSidebarOpen:true,
  isRightSidebarOpen:false,
  isNestedLeftSidebarOpen:true,
  isNestedRightSidebarOpen:true,
  floatNestedLeftSidebar:false,
  fullHeightNestedLeftSidebar:false,
  floatNestedRightSidebar:false,
  fullHeightNestedRightSidebar:false,
  isNestedFooterShowing:false,
  isNestedHeaderShowing:true
});
