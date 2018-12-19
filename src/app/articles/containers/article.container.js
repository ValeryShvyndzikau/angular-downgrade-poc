define(function(require) {
  "use strict";

  var _ = require("lodash");

  return {
    bindings: {
      article: "<"
    },

    //controllerAs: "articleCtrl",
    // prettier-ignore
    controller: function ArticleCtrl(
      articlesService
    ) {
      "ngInject";
  
      var vm = this;

      
      vm.mode = 'view';
      vm.expanded = false;
      vm.tmp_article = {}

      _.assign(vm, {
  
        $onInit: function() {
          vm.article = _.clone(vm.article); // avoid mutations in parent scope
        },

        handleExpandClick: function() {
          vm.expanded = true;
        },

        handleCollapseClick: function() {
          vm.expanded = false;
        },

        handleEditClick: function() {
          vm.mode = 'edit';
          vm.tmp_article = _.clone(vm.article)
        },

        handleSaveClick: function() {
            // validate
            // if all is OK
            // call service
            // update item in list somehow (event emitter | redux | direct call)
            // move to default mode
            vm.mode = 'view';
            vm.article = _.clone(vm.tmp_article);
          },

        toggleExpanded: function() {
          vm.expanded = !vm.expanded;
        },

      });

    },

    template: `
      <div>
        {{$ctrl.article.title}}
        <div ng-switch="$ctrl.expanded">
          <button ng-switch-default ng-click="$ctrl.handleExpandClick()">Expand</button>
          <button ng-switch-when="true" ng-click="$ctrl.handleCollapseClick()">Collapse</button>
        </div>
      </div>
      <div ng-if="$ctrl.expanded">
        <div ng-switch="$ctrl.mode">

          <div ng-switch-default>
            <button ng-click="$ctrl.handleEditClick()">Edit</button>
            <div>{{$ctrl.article.title}}</div>
            <div>{{$ctrl.article.author}}</div>
            <div>{{$ctrl.article.content}}</div>
          </div>

          <div ng-switch-when="edit">
            <div><button ng-click="$ctrl.handleSaveClick()">Save</button></div>
            <div><input ng-model="$ctrl.tmp_article.title"></div>
            <div><input ng-model="$ctrl.tmp_article.author"></div>
            <div><input ng-model="$ctrl.tmp_article.content"></div>
          </div>

        </div>

      </div>
    `
  };
});
