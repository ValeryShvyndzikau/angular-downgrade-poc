define(function(require) {
  "use strict";
  //vendors
  var angular = require("angular");

  // module deps
  var ArticlesService = require("./articles.service");

  var articlesContainer = require("./containers/articles.container");
  var articleContainer = require("./containers/article.container");

  var articleView = require("./components/article-view");
  var articleForm = require("./components/article-form");

  var togglerComponent = require("~/common/toggler");

  var mock_articles = require("./mock_articles");

  return angular
    .module("app.articles", [])
    .service("articlesService", ArticlesService)
    .value("mock_articles", mock_articles)
    .component("uiToggler", togglerComponent)
    .component("articlesContainer", articlesContainer)
    .component("articleContainer", articleContainer)
    .component("articleView", articleView)
    .component("articleForm", articleForm).name;
});
