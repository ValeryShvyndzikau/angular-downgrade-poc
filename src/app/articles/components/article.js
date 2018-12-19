define(function() {
  "use strict";

  return {
    bindings: {
      article: "<"
    },
    template: "<div>{{$ctrl.article.title}}"
  };
});
