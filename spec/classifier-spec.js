var classifierModule = require("../src/classifier");
describe("Word classifier", function () {
  
  it("should have init and test functions", function () {
    expect(typeof classifierModule.init).toEqual("function");
    expect(typeof classifierModule.test).toEqual("function");
  });
  
  describe("matrix operations", function () {
    describe("multiply", function () {
      var multiply = classifierModule.multiply;
      
      it("should return array", function () {
        var c = multiply([], []);
        expect(c).toEqual(jasmine.arrayContaining([]));
      });
      
      it("should return new matrix of the appropriate size", function () {
        // 3X2
        var a = [[1,2,3],[3,4,5]];
        // 2X3
        var b = [[2,3],[4,5],[6,7]];
        //Should be 2X2
        var c = multiply(a, b);
        expect(c.length).toEqual(2);
        expect(c[0].length).toEqual(2);
        expect(c).toEqual(jasmine.arrayContaining([[28, 34],[52,64]]));
      });
      
      it("should multiply matrixes", function () {
        var a = [[1,2],[3,4]];
        var b = [[2,3],[4,5]];
        var c = multiply(a, b);
        expect(c).toEqual(jasmine.arrayContaining([[10, 13],[22,29]]));
      });
    });
  });
});