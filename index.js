// Open your browser and check the console. To solve the challenges, change this file.
// To see your progress, just reload the page and see the console

console.log('Welcome to the array & DOM challenges');

// -----------CHALLENGE 1----------
// INSTRUCTIONS: use Array.forEach() to console.log() each element

// DO NOT TOUCH BELOW
var arr = [
    'Hello',
    'my',
    'name',
    'is',
    'John',
];
// DO NOT TOUCH ABOVE

function logArrayElements(input) {}

// UNCOMMENT BELOW
// logArrayElements(arr);

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

function transformUppercase(input) {}

// UNCOMMENT BELOW
// console.log(transformUppercase(arr));

// -----------CHALLENGE 3----------
// INSTRUCTIONS: use Array.reduce() to concatenate all the strings in the array
// expected result: 'Hello my name is John'
function reduceStrings(input) {}

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
        name: 'John',
        address: { city: 'Berlin' },
    },
    {
        name: 'Albert',
        address: { city: 'New York' },
    },
    {
        name: 'Hannah',
        address: { city: 'Sydney' },
    },
    {
        name: 'Paul',
        address: { city: 'Tokyo' },
    },
];
// DO NOT TOUCH ABOVE

function getCitiesArray(input) {}

// UNCOMMENT BELOW
// console.log(getCitiesArray(arr));

// -----------CHALLENGE 4----------
// INSTRUCTIONS: use Array.find() to return the person living in Sydney
// expected result:
// {
//     name: 'Hannah',
//     address: { city: 'Sydney' },
// },

function getSydneyCitizen(input) {}

// UNCOMMENT BELOW
// console.log(getSydneyCitizen(arr));

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
function getWisePeople(input) {}

// UNCOMMENT BELOW
// console.log(getWisePeople(arr));

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

function getMiddlePeople(input) {}

// UNCOMMENT BELOW
// console.log(getMiddlePeople(arr));

// -----------CHALLENGE 6----------
// INSTRUCTIONS:
// 1. Use document.querySelector to select all paragraphs.
// 2. Use Array.map() to return a new array with all of the heights (element.clientHeight) of the selected paragraphs.
// HINT: don't forget to wrap document.querySelector in Array.from()

function getParagraphHeights() {}

// UNCOMMENT BELOW
// console.log(getParaGraphHeights())

// -----------CHALLENGE 6----------
// INSTRUCTIONS:
// 1. Use document.querySelector to select one paragraph
// 2. Use Object.keys() to get an array of all keys of the element.style property
// 3. Finally, use Array.filter() to return a new array with keys that start with the letter 'm'

function getFilteredStyleKeys() {}

// UNCOMMENT BELOW
// console.log(getFilteredStyleKeys())

// -----------CHALLENGE 7----------
// INSTRUCTIONS:
// 1. Use document.querySelectorAll to select all paragraphs.
// 2. Use Array.forEach() to modify the 'innerHTML' of each element. You can set just any text inside.

function changeHtml() {}

// UNCOMMENT BELOW
// changeHtml()
