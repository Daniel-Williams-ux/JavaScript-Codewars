/*
Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "
*/
function doubleChar(str) {
  const splitted = str.split("");
  const mapped = splitted.map(el => el + el);
  const joined = mapped.join("");
  return joined;
}
describe("doubleChar", function() {
  it("works for some examples", function() {
    Test.assertEquals(doubleChar("abcd"), "aabbccdd");
    Test.assertEquals(doubleChar("Adidas"), "AAddiiddaass");
    Test.assertEquals(doubleChar("1337"), "11333377");
    Test.assertEquals(doubleChar("illuminati"), "iilllluummiinnaattii");
    Test.assertEquals(doubleChar("123456"), "112233445566");
    Test.assertEquals(doubleChar("%^&*("), "%%^^&&**((");
  });
});

//OR
function doubleChar(str) {
  return str.split("").map(el => el + el).join("")
}
