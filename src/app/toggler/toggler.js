define([
  "angular",
  "lodash",
  "../buttonGroupMenu.module",
  "../../property/property.factory",
  "../../property/property.filter"
], function(angular, _) {
  "use strict";

  angular
    .module("common.buttonGroupMenu")
    .directive("buttonGroupMenu", ButtonGroupMenuDirective);

  function ButtonGroupMenuDirective(propertyFactory, propertyFilter) {
    var localizedPropertyPromise = propertyFactory.loadProperties([
      {
        name: "container_web-common_buttonGroupMenu_strings.properties",
        path: "components/buttonGroupMenu/properties/"
      }
    ]);

    return {
      restrict: "E",
      scope: {
        isDisabled: "=?",
        options: "=",
        id: "=",
        onAction: "&",
        actionLabel: "=?",
        labelsAsKeys: "=?"
      },
      templateUrl:
        "components/buttonGroupMenu/partials/buttonGroupMenuView.html",
      link: function link(scope, element) {
        //scope.firstOption = _.head(scope.options);

        //var firstItemElement = element.find(".dropdown-item:first");

        localizedPropertyPromise.then(function loadProperties() {
          scope.actionLabel =
            scope.actionLabel ||
            propertyFilter("html.leave.common.buttonGroupMenu.actions.title");
        });

        element.on("shown.bs.dropdown", function shownDropDownCallback() {
          element.find(".dropdown-item:first").focus();
          //dropdownElement.find(".dropdown-item:first").focus();
          // scope.setFocusTo(element.find('.dropdown-item:first'));
        });

        // element.on('shown.bs.dropdown', scope.setFocusToFirstItem);

        // scope.setFocusTo = function setFocusTo(focusTarget) {
        // 	// target.focus();
        // 	focusTarget.focus();
        // };

        scope.handleActionClick = function handleActionClick(id, event) {
          event.preventDefault();

          if (scope.isDisabled) {
            return;
          }

          scope.onAction({
            clickedActionId: id,
            event: event
          });
        };
      }
    };
  }
});
