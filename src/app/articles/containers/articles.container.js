define(function(require) {
  "use strict";

  var _ = require("lodash");

  return {
    controllerAs: "articlesCtrl",
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
          vm.fetchArticles();
        },

        fetchArticles: function() {
          articlesService
            .fetch()
            .then(function(articles) {
              vm.articles = articles;
            })
        } 
      });
    },
    template: `
      <ul>Articles Container:
        <li ng-repeat="article in articlesCtrl.articles">
          <article-container article="article"></article-container>
        </li>
      </ul>
    `
  };
});
