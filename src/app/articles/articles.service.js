define(function(require) {
  "use strict";

  var EventEmitter = require("events");

  class ArticlesService extends EventEmitter {
    constructor($http) {
      "ng-annotate";
      super();

      this.$http = $http;
      this.articles = [];
    }

    get() {
      this.$http({
        method: "PUT",
        url: "http://www.mocky.io/v2/5c2900a53300006000a58bd5?mocky-delay=500ms"
      }).then(
        response => {
          this.articles = response.data;
          this.emitUpdate();
        },
        error => {
          console.error(error, "error");
          // this.meassagesService.add({ type: 'error', error.text })
        }
      );
    }

    update(article) {
      // prettier-ignore
      this.articles = this.articles.map(a => (a.id === article.id ? article : a));
      this.emitUpdate();
    }

    remove(articleId) {
      this.articles = this.articles.filter(a => a.id !== articleId);
      this.emitUpdate();
    }

    emitUpdate() {
      this.emit("update", this.articles);
    }
  }

  return ArticlesService;
});
