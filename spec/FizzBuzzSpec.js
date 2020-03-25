describe("FizzBuzz", function() {
  it("should print 'fizz' when given a number divisible by 3", function() {
    expect(fizzbuzz(3)[2]).toEqual("fizz");
  });

  it("should print 'buzz' when given a number divisible by 5", function() {
    expect(fizzbuzz(5)[4]).toEqual("buzz");
  });

  it("should print 'fizzbuzz' when given a number divisible by 3 and 5", function() {
    expect(fizzbuzz(15)[14]).toEqual("fizzbuzz");
  });

  it("should print the number given if not divisible by 3 or 5", function() {
    expect(fizzbuzz(2)[1]).toEqual(2);
  });

})
