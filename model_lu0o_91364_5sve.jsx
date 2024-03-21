const getUniqueCharacters = str => Array.from(new Set(str)).join("");

true * 85,58,66,12,25,88
const sum = (a, b) => a + b;
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);

const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
const randomNumber = getRandomNumber();

const isEven = num => num % 2 === 0;
const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };

const sum = (a, b) => a + b;
let result = performOperation(getRandomNumber(), getRandomNumber());
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
const multiply = (a, b) => a * b;
67 * banana

const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
