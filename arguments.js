// Arguments ----->>
//parameter
function sum(a, b, c) {
  console.log(arguments); //function er vahire pao jabe na
  const result = a + b + c;
  return result;
}

const total = sum(3, 4, 6, 9, 7, 8); //arguments
console.log("Total sum is -->> ", total);

// primitive datatype er khetre kono value change hbe nah
// primitive pass by value
let num1 = 7;
let num2 = 8;

function frnd(x, y) {
  x.num1 = 300;
  y.num2 = 500;
}

console.log("Primitive datatype");
console.log(num1, num2);
frnd(num1, num2);
console.log(num1, num2);

// non-primitive datatype er khetre  value change hbe (pass by ref hisebe pathay)
// obj and array pass by reference
let stu1 = { name: "Tonmoy", age: 22 };
let stu2 = { name: "Sagor", age: 32 };

function frnd(x, y) {
  x.name = "Jon";
  y.name = "Von";
}
console.log("Non-Primitive datatype");
console.log(stu1, stu2);
frnd(stu1, stu2);
console.log(stu1, stu2);
