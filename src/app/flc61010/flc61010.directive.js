define(function (require) {
  "use strict";

  return function () {
    return {
      restrict: "E",
      //transclude: true,
      scope: {
      },
      //     template: `
      //     <div class="outer">
      //         <div class="inner" ng-click="handleActionClick()">Click Me</div>
      //     </div>
      // `,
      template: `
            <button class="wtf" >WTF</button>
            <div class="dropdown">
                <button id="dLabel" class="dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown trigger
                    <span class="caret"></span>
                </button>
                <ul class="dropdown-menu" aria-labelledby="dLabel">
                  <li><a href="#" class="menu-item" ng-click="handleActionClick()">Item 1</a></li>
                  <li><a href="#" class="menu-item" ng-click="handleActionClick()">Item 2</a></li>
                </ul>
            </div>
        `,
      link: function (scope, element) {


        var dropdown = angular.element(element[0].querySelector('.dropdown'))

        scope.handleActionClick = function () {
          //alert('click')
          console.log('CLICKED')

        }

        // scope.setFocusToFirstItem = function setFocusToFirstItem() {
        //   var ma = element.find('a')[0];
        //   ma.focus();
        //   console.log('FUNCTIION CALLED22-3344')
        // }

        dropdown.on('shown.bs.dropdown', () => {
          var ma = element.find('a')[0];
          ma.focus();
          console.log('FUNCTIION CALLED22-3344')
        });

        //dropdown.triggerHandler('shown.bs.dropdown')
      }
    };
  };
});
