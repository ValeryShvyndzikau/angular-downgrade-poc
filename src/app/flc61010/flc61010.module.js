define(function(require) {
  "use strict";
  //vendors
  var angular = require("angular");
  var isolatedExampleDirective = require("./flc61010.directive");

  // module deps

  return angular
    .module("app.flc61010", [])
    .directive("isolatedExample", isolatedExampleDirective).name;
});
