define(function(require) {
  "use strict";

  var _ = require("lodash");

  return {
    //controllerAs: "articlesCtrl",
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
        },

        handleUpdate: function(article) {
          //console.log(article, 'final article' )
          vm.articles = vm.articles.map(a => a.id === article.id ? article : a);

          //console.log(vm.articles, 'modified articles' )
        }
      });
    },
    template: `
    <button ng-click="$ctrl.handleAdd(article)">ADD_ARTICLE</button>
      <ul>Articles Container:
        <li ng-repeat="article in $ctrl.articles">
          <a ng-click="$ctrl.handleRemove(article)"href="#">Remove</a>
          <article-container on-update="$ctrl.handleUpdate(article)" article="article"></article-container>
        </li>
      </ul>
    `
  };
});
