define(function(require) {
  "use strict";

  var _ = require("lodash");

  return {
    bindings: {
      article: "<",
      onUpdate: "&"
    },

    controller: function Ctrl(articlesService, $scope) {
      "ngInject";

      var vm = this;

      _.assign(vm, {
        $onInit: function() {
          vm.isEditing = false;
          //console.log("Article was initialized");
        },

        $onChanges: function() {
          console.log($scope, "$scope");
        },

        $onDestroy() {
          console.log("Article is going to be destroyed");
        },

        handleRemoveClick: function() {
          articlesService.remove(vm.article.id);
        },

        handleCancelClick: function() {
          vm.toggleMode();
        },

        handleSaveClick: function(updatedArticle) {
          articlesService.update(updatedArticle);
          vm.toggleMode();
        },

        toggleMode: function() {
          vm.isEditing = !vm.isEditing;
        }
      });
    },

    template: `
      <ui-toggler>
        <ui-toggler-title>
          {{$ctrl.article.title}} | <a ng-click="$ctrl.handleRemoveClick()"href="#">Remove</a>
        </ui-toggler-title>
        <ui-toggler-body>
          <div ng-switch="$ctrl.isEditing">
            <div ng-switch-when="false">
              <button ng-click="$ctrl.toggleMode()">Edit</button>
              <article-view article="$ctrl.article" />
            </div>
            <div ng-switch-when="true">
              <article-form
                article="$ctrl.article"
                on-cancel-click="$ctrl.handleCancelClick()"
                on-save-click="$ctrl.handleSaveClick(updatedArticle)"
              />
            </div>
        </ui-toggler-body>
      </ui-toggler>
    `
  };
});
