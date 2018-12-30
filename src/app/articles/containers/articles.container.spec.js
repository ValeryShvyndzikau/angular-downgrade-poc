//var fn = require("../../article.container");

var helloWriter = require("~/common/utils");

describe("Unit test running suite", () => {
  it("Should be equal", () => {
    expect(1).toEqual(1);
  });

  it("Should out 'Hello World'", () => {
    expect(helloWriter()).toEqual("Hello");
  });
});
