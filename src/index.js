"use strict";

define(function(require) {
  var angular = require("angular");
  var appModule = require("./app/app.module.js");

  angular.element(document).ready(function() {
    angular.bootstrap(document, [appModule]);
  });
});
