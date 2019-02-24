define(function (require) {
  var isolatedExampleDirective = require("./flc61010.directive");

  describe("FLC61010", () => {

    function findIn(element, selector) {
      return angular.element(element[0].querySelector(selector));
    }

    var scope,
      directiveScope,
      element,
      mockEvent = {},
      dropdownElement,
      firstMenuItemElement;

    jasmine.clock().install();

    beforeEach(() => {
      angular
        .module("flc61010", [])
        .directive("isolatedExample", isolatedExampleDirective);
      angular.mock.module("flc61010");
    });

    beforeEach(inject(function ($rootScope, $compile, $timeout) {

      scope = $rootScope.$new();
      // scope.options = [{
      // 	id: 'action_edit_notification',
      // 	iconLabel: 'icon-k-copy',
      // 	displayName: 'Copy'
      // },
      // {
      // 	id: 'action_deactivate_notification',
      // 	displayName: 'Activated'
      // }];
      // scope.onAction = {
      // 	clickedActionId: 'action_edit_notification'
      // };

      element = $compile('<isolated-example />')(scope);
      directiveScope = element.isolateScope();
      dropdownElement = angular.element(element[0].querySelector('.dropdown'));
      firstMenuItemElement = element[0].querySelector('.menu-item')


      scope.$digest();


      spyOn(directiveScope, 'handleActionClick').and.callThrough();
      //spyOn(directiveScope, 'setFocusToFirstItem').and.callThrough();
      spyOn(firstMenuItemElement, 'focus');
      // spyOn(directiveScope, 'onAction');

    }
    ));

    // it('it should set focus to the first menu item', function () {
    //   directiveScope.setFocusToFirstItem()
    //   expect(firstMenuItemElement.focus).toHaveBeenCalled();
    // });


    it('it should set focus to the first item, when menu is shown', function () {
      dropdownElement.triggerHandler('shown.bs.dropdown');
      expect(firstMenuItemElement.focus).toHaveBeenCalled();
      //expect(directiveScope.setFocusToFirstItem).toHaveBeenCalled();
    });


  });

});


/*

@TODO:
    1. Fix markup, firstOption should be used
    2. Add test about focus

      element = $compile('<isolated-example />')(scope);
      directiveScope = element.isolateScope();
      dropdownElement = angular.element(element[0].querySelector('.dropdown'));
      firstMenuItemElement = element[0].querySelector('.menu-item')


      scope.$digest();


      spyOn(directiveScope, 'handleActionClick').and.callThrough();
      //spyOn(directiveScope, 'setFocusToFirstItem').and.callThrough();
      spyOn(firstMenuItemElement, 'focus');
      // spyOn(directiveScope, 'onAction');


// ============================================================================== //


    // it('it should set focus to the first menu item', function () {
    //   directiveScope.setFocusToFirstItem()
    //   expect(firstMenuItemElement.focus).toHaveBeenCalled();
    // });


    it('it should set focus to the first item, when menu is shown', function () {
      dropdownElement.triggerHandler('shown.bs.dropdown');
      expect(firstMenuItemElement.focus).toHaveBeenCalled();
      //expect(directiveScope.setFocusToFirstItem).toHaveBeenCalled();
    });


*/

