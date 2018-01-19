import Ember from 'ember';

export default Ember.Route.extend({

  appState: Ember.inject.service('app-state'),
  actions: {
    toggleLeftSidebar(){
      this.set('appState.isLeftSidebarOpen', !this.get('appState.isLeftSidebarOpen'));
    },
    toggleRightSidebar(){
      this.set('appState.isRightSidebarOpen', !this.get('appState.isRightSidebarOpen'));
    },
    toggleNestedLeftSidebar(){

      this.set('appState.isNestedLeftSidebarOpen', !this.get('appState.isNestedLeftSidebarOpen'));
    },
    toggleNestedRightSidebar(){
      this.set('appState.isNestedRightSidebarOpen', !this.get('appState.isNestedRightSidebarOpen'));
    },
    toggleNestedFloatLeftSidebar(){
      this.set('appState.floatNestedLeftSidebar',!this.get('appState.floatNestedLeftSidebar'));
    },
    toggleFullHeightNestedLeftSidebar(){
      this.set('appState.fullHeightNestedLeftSidebar',!this.get('appState.fullHeightNestedLeftSidebar'));
    },
    toggleNestedFloatRightSidebar(){
      this.set('appState.floatNestedRightSidebar',!this.get('appState.floatNestedRightSidebar'));
    },
    toggleFullHeightNestedRightSidebar(){
      this.set('appState.fullHeightNestedRightSidebar',!this.get('appState.fullHeightNestedRightSidebar'));
    },
    toggleNestedHeader(){
      this.set('appState.isNestedHeaderShowing',!this.get('appState.isNestedHeaderShowing'));
    },
    toggleNestedFooter(){

      this.set('appState.isNestedFooterShowing',!this.get('appState.isNestedFooterShowing'));
    },
    showSnackbar(message){
      this.get("snackbar").showSnackbar("TEST");
  }
  },
  renderTemplate(){
    console.log('application route');
    this._super(...arguments);
    this.render('dummy-sidebar', {
      outlet: 'left-sidebar',
      into: 'application'
    });
    this.render('content', {
      outlet: 'content',
      into: 'application'
    });
    this.render('dummy-right-sidebar', {
      outlet: 'right-sidebar',
      into: 'application'
    });
    this.render('dummy-header-content', {
      outlet: "header-content",
      into: 'application'
    });
    this.render('footer',{
      outlet:"footer-content",
      into:'application'
    })

    this.render('nested-header-content', {
      outlet: "another-header-content",
      into: 'content'
    });
    this.render('nested-right-sidebar-content', {
      outlet: "right-sidebar",
      into: 'content'
    });

    this.render('nested-left-sidebar-content', {
      outlet: "left-sidebar",
      into: 'content'
    });
    this.render('nested-content', {
      outlet: "content",
      into: 'content'
    });
    this.render('nested-footer', {
      outlet: "footer-content",
      into: 'content'
    });
  }
});
