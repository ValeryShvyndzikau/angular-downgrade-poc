"use strict";

define(function(require) {
  // vendors
  var _ = require("lodash");
  var angular = require("angular");

  // modules
  var articlesModule = require("./articles/articles.module.js");
  var anotherModule = require("./another/another.module.js");
  var flc61010 = require("./flc61010/flc61010.module.js");

  // prettier-ignore
  return angular
    .module("app", [articlesModule, anotherModule, flc61010])
    .component("root", {
      template:
        "<div>App successfully bootstrapped<articles-container></articles-container></div><isolated-example />"
    }).name;
});
