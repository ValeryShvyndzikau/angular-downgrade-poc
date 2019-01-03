// https://scotch.io/tutorials/angularjs-form-validation

define(function() {
  "use strict";

  var _ = require("lodash");

  return {
    bindings: {
      article: "<",
      onSaveClick: "&",
      onCancelClick: "&"
    },

    controller: function Ctrl() {
      var vm = this;

      vm.$onInit = function() {
        vm.article = _.clone(vm.article);

        console.log(vm, "Log the form controller...");
      };

      vm.$doCheck = function() {
        console.log("$doCheck");
      };

      vm.$onChanges = function(changesObj) {
        console.log(changesObj, "changesObj");
      };
    },

    template: `
      <style type="text/css">
        .article-form input.ng-invalid.ng-touched {
          background-color: red;
        }
        .article-form input.ng-valid.ng-touched {
          background-color: #78FA89;
        }
      </style>

      <div style="background: #ccc">{{ articleForm | json }}</div>

      <form name="articleForm" class="article-form">
        <div>
          <label for="title">Title</label>
          <input id="title" name="title" ng-model="$ctrl.article.title" required>
        </div>
        <div>
          <label for="author">Author</label>
          <input id="author" name="author" ng-model="$ctrl.article.author" required>
        </div>
        <div>
          <label for="content">Content</label>
          <textarea name="content" id="content" ng-model="$ctrl.article.content"></textarea>
        </div>
        <button type="button" ng-click="$ctrl.onCancelClick()">Cancel</button>
        <button type="button" ng-click="$ctrl.onSaveClick({ updatedArticle: $ctrl.article })">Save</button>
      </form>
    `
  };
});
