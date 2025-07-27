const name = "sudipta"
const repoCount = 50 
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("sudipta-su-com")

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-13,4)
console.log(anotherString);

const newStringOne = "  sudipta  "
console.log(newStringOne)
console.log(newStringOne.trim());

const url = "https://sudipta.com/sudipta%20bar"
console.log(url.replace("%20" , "-"));

console.log(url.includes("pritha"));

console.log(gameName.split("-"));
