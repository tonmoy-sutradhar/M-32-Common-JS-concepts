// Strongly type language ----->>
/**
 * int a= 5;
 * string b = "TOnmoy sutradhar";
 * bool c = true;
 * object student = {name: "Tonmoy", id: 11};
 * int[] num = [2,4,6,7,87];
 * string[] friends = ['Abul',"kabul", "tabul"];
 **/

// Javascript is a Dynamic type language --->>

// primitive data type
const a = 5;
const b = "Tonmoy sutradhar";
const c = true;

// non-primitive data type
const age = [3, 5, 7, 89];
const student = { id: 11, class: 14 };
// console.log(typeof a, typeof b, typeof c, typeof age, typeof student);

let x = 5;
let y = 5;
// console.log(x, y);
y = 7; //value re-assigned
// console.log(x, y);

let p = { job: "Web Developer" };
let q = p;
// q = { job: "Dot Net Developer" };
// non-primitive houar karone eder man ek e jaigia refer korbe.
q.job = { job: "Java Developer" }; //reference pass kore er jonno 2 ta value e change hoiye jai
console.log(p, q);
