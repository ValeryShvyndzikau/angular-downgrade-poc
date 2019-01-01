define(function(require) {
  require("angular");
  require("angular-mocks");

  var ArticlesService = require("./articles.service");

  describe("Articles service test suite", () => {
    beforeEach(() => {
      angular.module("stub", []).service("articlesService", ArticlesService);
      angular.mock.module("stub");
    });

    // prettier-ignore
    it("Should exist and be available through DI", angular.mock.inject((articlesService, $httpBackend) => {
        expect(articlesService).toBeDefined();
      })
    );

    // prettier-ignore
    it("Should has empty articles list by default", angular.mock.inject((articlesService, $httpBackend) => {
        expect(articlesService.articles.length).toEqual(0);
      })
    );

    // prettier-ignore
    it("Should fetch articles list", angular.mock.inject((articlesService, $httpBackend) => {

        $httpBackend.when(
          "PUT",
          "http://www.mocky.io/v2/5c2900a53300006000a58bd5?mocky-delay=500ms"
        )
        .respond("STUB_ARTICLES");

        articlesService.get();
        $httpBackend.flush();

        expect(articlesService.articles).toEqual("STUB_ARTICLES");
      })
    );
  });
});

/*
function getDependenciesNames(cb) {
  //return cb.toString().pickParamsName();

  return ["dep1", "dep2"];
}

function inject(cb) {
  const deps = getDependenciesNames();
  return workFn() {
    cb.apply(null, deps);
  }
}

*/
