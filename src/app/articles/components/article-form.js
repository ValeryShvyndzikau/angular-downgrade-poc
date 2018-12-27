define(function() {
  "use strict";

  return {
    bindings: {
      article: "=",
      onSaveClick: "&",
      onCancelClick: "&"
    },
    template: `
      <form style="background: yellow">
        <div>
          <label for="title">Title</label>
          <input id="title" ng-model="$ctrl.article.title">
        </div>
        <div>
          <label for="author">Author</label>
          <input id="author" ng-model="$ctrl.article.author">
        </div>
        <div>
          <label for="content">Content</label>
          <textarea  id="content" ng-model="$ctrl.article.content"></textarea>
        </div>
        <button type="button" ng-click="$ctrl.onCancelClick()">Cancel</button>
        <button type="button" ng-click="$ctrl.onSaveClick()">Save</button>
      </form>
    `
  };
});
