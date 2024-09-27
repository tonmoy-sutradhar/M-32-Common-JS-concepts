/**
 * 1. variable that is not initialized will give undefined
 * 2. function with no return
 * 3. parameter that is not passed will be undefined
 * 4. if return has nothing on the right side will return undefined
 * 5. property that doesn't exists on an object will give you undefined
 * 6. accessing array elements outside of the index range
 **/

let first;
// console.log(first);

function second(a, b) {
  const total = a + b;
}
const result = second();
// console.log(result);

// ---------------->>>
function third(a, b, c, d) {
  const total = a + b + c + d;
  // console.log(a, b, c, d);
}
// third(2, 4);

// ---------->>
function nonNegative(x, y) {
  if (x < 0 || y < 0) {
    return;
  }
  return x + y;
}
const total = nonNegative(3, 5);
// console.log(total);

// ------>>
const fifth = { id: 4, name: "TOnmoy", age: 22 };
// console.log(fifth.id, fifth.salary);

// --------??
const six = [3, 5, 4, 278, 8];

// don't use it, instead use (splice)
delete six[1];
console.log(six[1]);
console.log(six[7]);

// ------->
const a = undefined;
const s = null;

console.log(typeof a);
// kono kiser value jodi empty theke tahole null diye rakhte hbe
console.log(typeof s);
