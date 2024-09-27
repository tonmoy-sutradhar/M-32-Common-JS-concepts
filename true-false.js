/**
 * Truthy:
 * 1. true
 * 2. any number (+ve, -ve) will be truthy other than 0
 * 3. any string other than empty string
 * 4. {} empty objects truthy value
 * 5. [] empty array truthy value
 *
 *
 * Falsy:
 * 1. false
 * 2. 0
 * 3. "" (empty string)
 * 4. undefined
 * 5. null
 **/

const x = false;
if (x) {
  console.log("value of x is truthy");
} else {
  console.log("vlaue of x is falsy");
}

// -------------->>
// check falsy
const z = null;
if (!z) {
  console.log("Value is falsy");
}

// check truthy
const t = null;
if (!!t) {
  console.log("Value is truthy");
}
