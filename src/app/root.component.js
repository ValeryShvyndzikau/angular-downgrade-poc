"use strict";

define(function(require) {
  var _ = require("lodash");

  function AppController($scope) {
    var vm = this;

    console.log($scope, "$scope");

    _.extend(vm, {
      userName: "Valery",

      updateUserName: function() {
        vm.userName = "Olga";
      },

      $onInit: function() {
        console.log(this, "this ON_INIT HOOK");
      },

      $doCheck: function() {
        console.log("$doCheck");
      },

      $onChanges: function(changesObj) {
        console.log(changesObj, "changesObj ON_CHANGES HOOK");
      }
    });
  }

  return {
    controller: AppController,
    controllerAs: "appCtrl",
    template:
      '<div>ROOT_COMPONENT:<deep-component prop="appCtrl.userName"></deep-component></div>'
  };
});

//'<div>Hello {{appCtrl.userName}} from app component <button ng-click="appCtrl.updateUserName()"></div>'
