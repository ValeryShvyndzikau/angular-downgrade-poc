define(function(require) {
  var articlesContainer = require("./articles.container");

  describe("ArticlesContainer", () => {
    var articlesService = {
      get: jasmine.createSpy("get"),
      on: jasmine.createSpy("on"),
      emitUpdate: cb => cb("fetched_articles")
    };

    beforeEach(() => {
      angular
        .module("articles", [])
        .value("articlesService", articlesService)
        .component("articlesContainer", articlesContainer);
      angular.mock.module("articles");
    });

    // prettier-ignore
    it("Should exist", angular.mock.inject($componentController => {
        var articlesCtrl = $componentController("articlesContainer", {}, {});
        expect(articlesCtrl).toBeDefined();
      })
    );

    // prettier-ignore
    it("Should fetch articles list by init", angular.mock.inject(($componentController, articlesService) => {

        var articlesCtrl = $componentController("articlesContainer", {}, {});

        articlesCtrl.$onInit();
        expect(articlesService.get).toHaveBeenCalled();
      })
    );

    //prettier-ignore
    it("Should subscribe on articlesService updates", angular.mock.inject(($componentController, articlesService) => {

      var articlesCtrl = $componentController("articlesContainer", {}, {});

      articlesCtrl.$onInit();
      expect(articlesService.on).toHaveBeenCalled();
    })
  );

    // prettier-ignore
    it("Should set fetched articles to the 'VM'", angular.mock.inject(($componentController, articlesService) => {

      var articlesCtrl = $componentController("articlesContainer", {}, {});

      articlesCtrl.$onInit();
      expect(articlesCtrl.articles).toEqual([]);
      expect(articlesService.get).toHaveBeenCalled();

      articlesService.emitUpdate(articlesCtrl.updateArticles);

      expect(articlesCtrl.articles).toEqual('fetched_articles');
    })
    );
  });
});
