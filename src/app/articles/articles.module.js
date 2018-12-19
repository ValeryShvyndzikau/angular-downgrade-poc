"use strict";

define(function(require) {
  //vendors
  var angular = require("angular");

  // module deps
  var articlesService = require("./articles.service");
  var articlesContainer = require("./containers/articles.container");
  var articleContainer = require("./containers/article.container");
  var mock_articles = require("./mock_articles");

  return angular
    .module("app.articles", [])
    .factory("articlesService", articlesService)
    .value("mock_articles", mock_articles)
    .component("articlesContainer", articlesContainer)
    .component("articleContainer", articleContainer).name;
});
