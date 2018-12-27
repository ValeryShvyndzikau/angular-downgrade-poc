define(function(require) {
  var mock_articles = require("./mock_articles");
  var EventEmitter = require("events");

  class ArticlesService extends EventEmitter {
    constructor($q, $timeout) {
      "ng-annotate";
      super();

      this.$timeout = $timeout;
      this.articles = [];
    }

    get() {
      this.$timeout(() => {
        this.articles = mock_articles;
        this.emitUpdate();
      }, 1000);
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
