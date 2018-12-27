define(function(require) {
  "use strict";

  var _ = require("lodash");

  return {
    transclude: {
      title: "uiTogglerTitle",
      body: "uiTogglerBody"
    },
    bindings: {
      expanded: "<?",
      onToggle: "&?"
    },

    controller: function Ctrl() {
      var vm = this;

      vm.expanded = _.has(vm, "expanded") ? vm.expanded : false;

      _.assign(vm, {
        handleToggle: function() {
          vm.expanded = !vm.expanded;

          if (vm.onToggle) {
            vm.onToggle();
          }
        }
      });
    },

    template: `
      <div>
        <div ng-transclude="title" ng-click="$ctrl.handleToggle()" style="cursor: pointer;"></div>
        <div ng-transclude="body" ng-if="$ctrl.expanded"></div>
      </div>
    `
  };
});
