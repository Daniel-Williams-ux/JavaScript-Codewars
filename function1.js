//Implement a function which multiplies two numbers.
function multiply (num1, num2) {
//   const num1 = 2;
//   const num2 = 3;
  return num1 * num2;
}

//Sample Tests
const chai = require('chai');
const assert = chai.assert;

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(multiply(2, 3), 6);
  });
});


//OR
function multiply(a, b){
  if(typeof a == 'number' && typeof b == 'number')
    return a * b;  
}
