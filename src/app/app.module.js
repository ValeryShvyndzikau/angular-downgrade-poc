"use strict";

define(function(require) {
  // vendors
  var _ = require("lodash");
  var angular = require("angular");

  // modules
  var articlesModule = require("./articles/articles.module.js");
  var anotherModule = require("./another/another.module.js");

  // prettier-ignore
  return angular
    .module("app", [articlesModule, anotherModule])
    .component("root", {
      template:
        "<div>App successfully bootstrapped<articles-container></articles-container></div>"
    }).name;
});
