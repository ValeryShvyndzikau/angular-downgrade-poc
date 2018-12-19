define(function() {
  "use strict";

  var _ = require("lodash");

  return function($q, $timeout, mock_articles) {
    "ng-annotate";

    var articles = mock_articles;
    return {
      fetch: function() {
        return $q(function(resolve, reject) {
          $timeout(function() {
            return resolve(mock_articles);
          }, 1000);
        });
      },

      update: function(article) {
        // find
      }
    };
  };
});
