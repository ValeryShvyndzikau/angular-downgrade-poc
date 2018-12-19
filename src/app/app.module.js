"use strict";

define(function(require) {
  // vendors
  var _ = require("lodash");
  var angular = require("angular");

  // modules
  var articlesModule = require("./articles/articles.module.js");

  // prettier-ignore
  return angular
    .module("app", [articlesModule])
    .component("root", {
      template:
        "<div>App successfully bootstrapped<articles-container></articles-container></div>"
    }).name;
});
