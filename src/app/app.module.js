"use strict";

define(function(require) {
  // vendors
  var _ = require("lodash");
  var angular = require("angular");

  // modules
  var articlesModule = require("./articles/articles.module.js");

  // components
  var rootComponent = require("./root.component");

  return angular
    .module("app", [articlesModule])
    .component("root", {
      template:
        "<div>App successfully bootstrapped<articles-container></articles-container></div>"
    }).name;

  // .component('appComponent', {
  //   controller: function DeepTestCtrl() {

  //     var vm = this;

  //     vm.userName = 'Valery';

  //     vm.$onInit = function() {
  //       console.log('app $onInit')
  //     }

  //     vm.update = function() {
  //       vm.userName = 'Olga'
  //     }
  // },
  //template: '<div>APP_COMPONENT:<button ng-click="$ctrl.update()">f</button><deep-component prop="$ctrl.userName"></deep-component></div>'

  //})
  // .component("deepComponent", {

  //   bindings: {
  //     prop: '<'
  //   },

  //   controller: function DeepTestCtrl() {

  //   this.$onInit = function() {
  //     console.log('deep $onInit')
  //   }

  //   this.$onChanges = function(o) {
  //     console.log(o, '$onChanges phase')
  //   }

  //   },

  //   //controllerAs: 'deepCtrl',

  //   template: "<h1>DEEP_COMPONENT: {{$ctrl.prop}}</h1>"
  // }).name;
});
