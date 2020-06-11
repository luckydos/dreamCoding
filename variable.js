// 1. Use strict
// added in ES 5
// use this for Vanilla Javascript.
'use strict';

// 2. Variable
// let (added in ES6)
let gloabalName = 'gloabal name'
{
	let name = 'ellie';
	console.log(name);
	consoleAppend(name);
	name = 'hello';
	console.log(name);
	consoleAppend(name);
}
console.log(name);
console.log(gloabalName);
consoleAppend(name);
consoleAppend(gloabalName);

// var (don't ever use this!)
// var hoisting (move declaration from bottom to top)
// var hoisting (어디에서 선언했는지에 상관없이 항상 제일위로 선언을 끌어 올려주는 것)
// has no block scope
{
	age_block = 12;
	var age_block;
}
console.log('age_block: ' + age_block);
consoleAppend('age_block: ' + age_block);

console.log(age);
consoleAppend(age);
age = 3;
console.log(age);
consoleAppend(age);
var age;

// 3. Constans
// favor immutable data type always for a few reasons:
//  - security
//  - thread safety
//  - reduce human mistakes
const daysInWeek = 7;
const maxNumber = 5;

// 4. Variable types
// primitive, single item: number, string, boolean, null, undefined, symbol
// object box container
// function, first-class function
const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);
consoleAppend(`value: ${count}, type: ${typeof count}`);
consoleAppend(`value: ${size}, type: ${typeof size}`);

// number = special numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);
consoleAppend(infinity);
consoleAppend(negativeInfinity);
consoleAppend(nAn);

// bigInt (fairly new, don't use it yet)
const bigInt = 12345678901234567890123456789012345678901234567890n; // over(-2**53) ~ 2*53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
console.log(`Number.MAX_SAFE_INTEGER: ${Number.MAX_SAFE_INTEGER}`);
consoleAppend(`value: ${bigInt}, type: ${typeof bigInt}`);
consoleAppend(`Number.MAX_SAFE_INTEGER: ${Number.MAX_SAFE_INTEGER}`);

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
consoleAppend(`value: ${greeting}, type: ${typeof greeting}`);


const helloBob = `hi ${brendan}!`; // template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
consoleAppend(`value: ${helloBob}, type: ${typeof helloBob}`);

console.log(`value: ${brendan}, type: ${typeof brendan}`);
consoleAppend(`value: ${brendan}, type: ${typeof brendan}`);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // flase

console.log(`value: ${canRead}, type: ${canRead}`);
console.log(`value: ${test}, type: ${test}`);
consoleAppend(`value: ${canRead}, type: ${canRead}`);
consoleAppend(`value: ${test}, type: ${test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${nothing}`);
consoleAppend(`value: ${nothing}, type: ${nothing}`);

// undefined
let x;
console.log(`value: ${x}, type: ${x}`);
consoleAppend(`value: ${x}, type: ${x}`);

// symbol. create unique identifiers for objectys
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
consoleAppend(symbol1 === symbol2);

const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2);
consoleAppend(gSymbol1 === gSymbol2);

console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);
consoleAppend(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// object, real-life object, data structrure
const ekk = { name: 'ekk', age: 25 };
ekk.age = 20;

// 5. Dynamic typing: dynamically typed language
let text = 'hello';
console.log(text.charAt(0));
consoleAppend(text.charAt(0));
console.log(`value: ${text}, type: ${typeof text}`);
consoleAppend(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
consoleAppend(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
consoleAppend(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
consoleAppend(`value: ${text}, type: ${typeof text}`);

function consoleAppend(appendText) {
	let dcConsole = document.querySelector('#dcConsole > .dcConsoleText');
	// dcConsole Append
	dcConsole.innerHTML += '<br>' + appendText;
}