/*
You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.
Write a program that returns the girl's age (0-9) as an integer.
Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". 
The first character in the string is always a number.
*/
function getAge(inputString){
  return parseInt(inputString);
} 
console.log(getAge("4 years old", 4))//=>4

/*
The parseInt method parses a value as a string and returns the first integer.
A radix parameter specifies the number system to use:
2 = binary, 8 = octal, 10 = decimal, 16 = hexadecimal.
If radix is omitted, JavaScript assumes radix 10. If the value begins with "0x", JavaScript assumes radix 16.
*/

parseInt("10"); //10
parseInt("10.00"); // 10
parseInt("10.33");  //10
parseInt("34 45 66"); //34
parseInt(" 60 "); //60
parseInt("40 years"); //40
parseInt("He was 40"); //NAN
//Ref => w3school


/*
The parseInt() function parses a string argument and returns an integer of the specified radix (the base in mathematical numeral systems).

In a positional numeral system, the radix or base is the number of unique digits, including the digit zero, used to represent numbers. 
For example, for the decimal/denary system (the most common system in use today) the radix (base number) is ten, because it uses the ten digits from 0 through 9.
*/

//syntax
parseInt(string)
parseInt(string, radix)

//string
//A string starting with an integer. Leading whitespace in this argument is ignored.

