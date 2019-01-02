// https://steelkiwi.com/blog/validation-error-handling-angularjs-applicatios/

define(function(require) {
  "use strict";

  var _ = require("lodash");

  return {
    // prettier-ignore
    controller: function ArticlesCtrl(
        $q,
        $timeout,
        mock_articles,
        articlesService
    ) {
      "ngInject";

      var vm = this;

      _.assign(vm, {

        $onInit: function() {
          // scope.applyAsync() // run updates manually
          articlesService.on('update', (articles) => { vm.articles = articles })
          vm.fetchArticles();
        },

        fetchArticles: function() {
          articlesService.get();
        },

        handleAddClick: function() {
          articleService.add();
        }

      });
    },
    template: `
      <button ng-click="$ctrl.handleAddClick(article)">ADD_ARTICLE</button>
      <ul>Articles Container:
        <li ng-repeat="article in $ctrl.articles">
          <article-container article="article" />
        </li>
      </ul>
    `
  };
});
