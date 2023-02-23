console.log("-init-")
console.log("#=====================================================#\n")

//regex for matching a hex, this will define if a string is a hex or not
//     /^#?([a-f0-9]{6}|[a-f0-9]{3})$/

// breaking it down: /^#?  ( [a-f0-9]  {6}   |   [a-f0-9]  {3} )   $/
//1:   /^#?   ^ means match any first character, in this case the first character must be a #, and the ? means this must be followed by-
//2: skipping the brackets... [a-f0-9]  {6}    a-f will mean any english alphabetical character between and including a through f, likewise with 0-9,--
//-- [a-f0-9] in total meaning any character a through f or any number 0-9. Lastly {6} all this means is there must be 6 characters within the rules defined before
//3: |  [a-f0-9]{3}    | meanning or  again any character a-f or number 0-9 and {3}, 3 characters within these rules.
//4: $/ essentialy ending the regex...


const randomhex = "#fcba03";
const notARandomHex = "#ndf983nokdf"

const matchhex = /^#?([a-f0-9]{6}|[a-f0-9]{3})$/ ;

const match1 = randomhex.match(matchhex); // the regex match expression is not exprected to return boolean even though it seems like it should, it contains how regex matched it
const match2 = notARandomHex.match(matchhex);

const test1 = matchhex.test(randomhex); // test will return a boolean every single time, I prefer to work with regex this way majority of the time, I find it unironicly easier to test.
const test2 = matchhex.test(notARandomHex);


console.log("result of match1: ", match1);
console.log("result of match2: ", match2);

console.log("#=====================================================#\n")
console.log("result of test1: ", test1);
console.log("result of test2: ", test2);


//[ '#fcba03', 'fcba03', index: 0, input: '#fcba03', groups: undefined ] --- seems like synchronus

// console.log(!randomhex.match(/^#?([a-f0-9]{6}|[a-f0-9]{3})$/));
console.log("#=====================================================#\n")
console.log("done")