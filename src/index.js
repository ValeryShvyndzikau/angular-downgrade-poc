"use strict";

define(function (require) {
  var angular = require("angular");

  require("bootstrap/dist/css/bootstrap.min.css");

  require("jquery");
  require("bootstrap");
  var appModule = require("./app/app.module.js");

  angular.element(document).ready(function () {
    angular.bootstrap(document, [appModule]);
  });
});
