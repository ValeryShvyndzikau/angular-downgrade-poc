define(function() {
  "use strict";

  return {
    bindings: {
      article: "<"
    },

    template: `
      <ul style="list-style: square">
        <li>{{$ctrl.article.title}}</li>
        <li>{{$ctrl.article.author}}</li>
        <li>{{$ctrl.article.content}}</li>
      </ul>
      `
  };
});
