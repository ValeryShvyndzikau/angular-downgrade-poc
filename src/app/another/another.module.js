define(function(require) {
  var angular = require("angular");

  return angular.module("app.another", []).factory(() => {
    return "abc";
  }).name;
});
