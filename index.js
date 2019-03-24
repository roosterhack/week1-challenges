console.log("Welcome to the array & DOM challenges");

// -----------CHALLENGE 1----------
// INSTRUCTIONS: use Array.forEach() to console.log() each element

// DO NOT TOUCH BELOW
var arr = ["Hello", "my", "name", "is", "John"];
// DO NOT TOUCH ABOVE

function logArrayElements(input) {
  input.forEach(i => console.log(i));
}

// UNCOMMENT BELOW
logArrayElements(arr);

// -----------CHALLENGE 2----------
// INSTRUCTIONS: use Array.map() to return a new array with the uppercase elements
// expected result:
// [
//     'HELLO',
//     'MY',
//     'NAME',
//     'IS',
//     'JOHN',
// ]

function transformUppercase(input) {
  return input.map(i => i.toUpperCase());
}

// UNCOMMENT BELOW
console.log(transformUppercase(arr));

// -----------CHALLENGE 3----------
// INSTRUCTIONS: use Array.reduce() to concatenate all the strings in the array
// expected result: 'Hello my name is John'
function reduceStrings(input) {
  const newStr = input.reduce((pValue, cValue) => pValue.concat(cValue, " "), "");
  return newStr;
}
console.log(reduceStrings(arr));
// -----------CHALLENGE 4----------
// INSTRUCTIONS: use Array.map() to return an array containing the city of each element
// expected result:
// [
//     'Berlin',
//     'New York',
//     'Sydney',
//     'Tokyo',
// ];

// DO NOT TOUCH BELOW
arr = [
  {
    name: "John",
    address: { city: "Berlin" }
  },
  {
    name: "Albert",
    address: { city: "New York" }
  },
  {
    name: "Hannah",
    address: { city: "Sydney" }
  },
  {
    name: "Paul",
    address: { city: "Tokyo" }
  }
];
// DO NOT TOUCH ABOVE

function getCitiesArray(input) {
  return input.map(person => person.address.city);
}

// UNCOMMENT BELOW
console.log(getCitiesArray(arr));

// -----------CHALLENGE 4----------
// INSTRUCTIONS: use Array.find() to return the person living in Sydney
// expected result:
// {
//     name: 'Hannah',
//     address: { city: 'Sydney' },
// },

function getSydneyCitizen(input) {
  return input.find(person => person.address.city === "Sydney");
}

// UNCOMMENT BELOW
console.log(getSydneyCitizen(arr));

// -----------CHALLENGE 5----------
// INSTRUCTIONS: use Array.filter() to return a new Array with persons older than 24 years
// expected result:
// [
//     {
//         name: 'Hannah',
//         age: 36
//         address: { city: 'Sydney' },
//     },
//     {
//         name: 'Paul',
//         age: 48,
//         address: { city: 'Tokyo' },
//     },
// ];

// DO NOT TOUCH BELOW
arr.forEach(function(el, index) {
  el.age = (index + 1) * 12;
});
// DO NOT TOUCH ABOVE
function getWisePeople(input) {
  return input.filter(person => person.age > 24);
}

// UNCOMMENT BELOW
console.table(getWisePeople(arr));

// -----------CHALLENGE 5----------
// INSTRUCTIONS: use Array.slice() to return a new array with the two people in the middle
// expected result:
// [
//     {
//         name: 'Albert',
//         age: 24,
//         address: { city: 'New York' },
//     },
//     {
//         name: 'Hannah',
//         age: 36,
//         address: { city: 'Sydney' },
//     },
// ]

function getMiddlePeople(input) {
  return input.slice(1, input.length - 1);
}

// UNCOMMENT BELOW
console.table(getMiddlePeople(arr));

// -----------CHALLENGE 6----------
// INSTRUCTIONS:
// 1. Use document.querySelector to select all paragraphs.
// 2. Use Array.map() to return a new array with all of the heights (element.clientHeight) of the selected paragraphs.
// HINT: don't forget to wrap document.querySelector in Array.from()

function getParagraphHeights() {
  const allP = [...document.querySelectorAll("p")];
  return allP.map(p => p.clientHeight);
}

// UNCOMMENT BELOW
console.log(getParagraphHeights());

// -----------CHALLENGE 6----------
// INSTRUCTIONS:
// 1. Use document.querySelector to select one paragraph
// 2. Use Object.keys() to get an array of all keys of the element.style property
// 3. Finally, use Array.filter() to return a new array with keys that start with the letter 'm'

function getFilteredStyleKeys() {
  const p = document.querySelector("p");
  const styles = Object.keys(p.style);
  return styles.filter(key => key[0] === "m");
}

// UNCOMMENT BELOW
console.table(getFilteredStyleKeys());

// -----------CHALLENGE 7----------
// INSTRUCTIONS:
// 1. Use document.querySelectorAll to select all paragraphs.
// 2. Use Array.forEach() to modify the 'innerHTML' of each element. You can set just any text inside.

function changeHtml() {
  const allP = [...document.querySelectorAll("p")];
  allP.forEach(p => (p.innerHTML = "Web Dev is hard but I am not gonna give up!"));
}

// UNCOMMENT BELOW
changeHtml();
