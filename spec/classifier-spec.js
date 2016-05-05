var classifier = require("../src/classifier");
describe("Word classifier", function () {
  it("should have init and test functions", function () {
    expect(typeof classifier.init).toEqual("function");
    expect(typeof classifier.test).toEqual("function");
  });
});