define(function() {
  "use strict";

  var _ = require("lodash");

  return {
    bindings: {
      article: "<",
      onUpdate: "&"
    },

    controller: function Ctrl() {
      var vm = this;

      _.assign(vm, {
        $onInit: function() {
          vm.tmp_article = _.clone(vm.article);
        },

        $onDestroy: function() {
          console.log("$onDestroy called....");
        }

        // validate
        // if all is OK
        // call service
        // update item in list somehow (event emitter | redux | direct call)
        // move to default mod
      });
    },
    template: `
      <form style="background: yellow">
        <div>
          <label for="title">Title</label>
          <input id="title" ng-model="$ctrl.tmp_article.title">
        </div>
        <div>
          <label for="author">Author</label>
          <input id="author" ng-model="$ctrl.tmp_article.author">
        </div>
        <div>
          <label for="content">Content</label>
          <textarea  id="content" ng-model="$ctrl.tmp_article.content"></textarea>
        </div>
        <div ng-click="$ctrl.onUpdate({ article: $ctrl.tmp_article })" style="background: green">Update</div>
      </form>
    `
  };
});
