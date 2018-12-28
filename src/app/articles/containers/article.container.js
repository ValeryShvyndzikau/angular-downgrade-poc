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

      vm.isEditing = false;

      _.assign(vm, {
        $onInit: function() {
          console.log("Article was initialized");
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

        handleSaveClick: function() {
          articlesService.update(vm.tmp_article);
          vm.toggleMode();
        },

        toggleMode: function() {
          vm.isEditing = !vm.isEditing;

          if (vm.isEditing) {
            vm.createTempArticle();
          }
        },

        createTempArticle: function() {
          vm.tmp_article = _.clone(vm.article);
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
                article="$ctrl.tmp_article"
                on-cancel-click="$ctrl.handleCancelClick()"
                on-save-click="$ctrl.handleSaveClick()"
              />
            </div>
        </ui-toggler-body>
      </ui-toggler>
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
