describe("fizzBuzz", function() {
    
    beforeEach(function() {
        fizzbuzz = new fizzBuzz();
    });
    
    describe("Returns numOne, fizz, buzz, or fizzbuzz", function() {
      it("should exist", function() {
          expect(fizzBuzz).toBeDefined;
      });
       it("should return fizzbuzz when called as fizzBuzz(15)", function() {
          var result = fizzBuzz(15);
          expect(result).toBe("FizzBuzz");
       });
       it("should return fizz when called as fizzBuzz(9)", function() {
          var result = fizzBuzz(9);
          expect(result).toBe("Fizz");
       });
       it("should return buzz when called as fizzBuzz(10)", function() {
          var result = fizzBuzz(10);
          expect(result).toBe("Buzz");
       });
       it("should return 11 when called as fizzBuzz(11)", function() {
          var result = fizzBuzz(11);
          expect(result).toBe(11);
       });
    });
});