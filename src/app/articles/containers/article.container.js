define(function(require) {
  "use strict";

  var _ = require("lodash");

  return {
    bindings: {
      article: "<",
      onUpdate: "&"
    },

    controller: function Ctrl(articlesService) {
      "ngInject";

      var vm = this;

      /**
       * @todo: Actually the logic is only about toggling/mode here (adjust/refactor flow)
       */

      //vm.mode = "view";
      //vm.expanded = false;

      _.assign(vm, {
        // test: function(a) {
        //   console.log(vm.onUpdate({ article: a }), "a");
        // }
        // handleExpandClick: function() {
        //   vm.expanded = true;
        // },
        // handleCollapseClick: function() {
        //   vm.expanded = false;
        //   vm.mode = "view";
        // },
        // handleEditClick: function() {
        //   vm.mode = "edit";
        // },
        // handleUpdate: function(article) {
        //   vm.mode = "view";
        //   vm.onUpdate({ article });
        // }
      });
    },

    template: `
      <div ng-init="UIState = { expanded: false, mode: 'view' }">
        {{$ctrl.article.title}}
        <div ng-switch="UIState.expanded">
          <button ng-switch-default ng-click="UIState.expanded = true">Expand</button>
          <button ng-switch-when="true" ng-click="UIState.expanded = false; UIState.mode = 'view'">Collapse</button>
        </div>
      </div>
      <div ng-if="UIState.expanded">
        <div ng-switch="UIState.mode">

          <div ng-switch-default>
            <button ng-click="UIState.mode = 'edit'">Edit</button>
            <div>{{$ctrl.article.title}}</div>
            <div>{{$ctrl.article.author}}</div>
            <div>{{$ctrl.article.content}}</div>
          </div>

          <div ng-switch-when="edit">
            <article-form on-update="$ctrl.onUpdate({ article: article }); UIState.mode = 'view'" article="$ctrl.article"></article-form>
          </div>
        </div>

      </div>
    `
  };
});

/*

<li ngRepeat={article in articles}>
<toggler title, onToggle="$ctrl.doOptionalStuff()">
  <article-container article="article" />
    <article-view>
    <article-edit>
  // article will be destroyed by collapse and then opened in "view" mode, as we expecting
</toggler>






*/
