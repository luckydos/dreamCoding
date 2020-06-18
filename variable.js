// 1. Use strict
// added in ES 5
// use this for Vanilla Javascript.
'use strict';

// 2. Variable, rw(read/write)
// let (added in ES6)
let gloabalName = 'gloabal name'
{
	let name = 'ellie';
	consolePrint(name);

	name = 'hello';
	consolePrint(name);
}
consolePrint(name);
consolePrint(gloabalName);

// var (don't ever use this!)
// var hoisting (move declaration from bottom to top)
// var hoisting (어디에서 선언했는지에 상관없이 항상 제일위로 선언을 끌어 올려주는 것)
// has no block scope
{
	age_block = 12;
	var age_block;
}
consolePrint('age_block: ' + age_block);

consolePrint(age);
age = 3;
consolePrint(age);
var age;

// 3. Constant, r(read only)
// use const whenever possible.
// only use let if variable needs to change.
const daysInWeek = 7;
const maxNumber = 5;

// Note!
// Immutable data types: premitive types, frozen objects (i.e. object.freeze())
// Mutable data types: all objects by default are mutable in JS
// favor immutable data type always for a few reasons:
//  - security
//  - thread safety
//  - reduce human mistakes

// 4. Variable types
// primitive, single item: number, string, boolean, null, undefined, symbol
// object box container
// function, first-class function
const count = 17; // integer
const size = 17.1; // decimal number
consolePrint(`value: ${count}, type: ${typeof count}`);
consolePrint(`value: ${size}, type: ${typeof size}`);

// number = special numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
consolePrint(infinity);
consolePrint(negativeInfinity);
consolePrint(nAn);

// bigInt (fairly new, don't use it yet)
const bigInt = 12345678901234567890123456789012345678901234567890n; // over(-2**53) ~ 2*53)
consolePrint(`value: ${bigInt}, type: ${typeof bigInt}`);
consolePrint(`Number.MAX_SAFE_INTEGER: ${Number.MAX_SAFE_INTEGER}`);

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
consolePrint(`value: ${greeting}, type: ${typeof greeting}`);


const helloBob = `hi ${brendan}!`; // template literals (string)
consolePrint(`value: ${helloBob}, type: ${typeof helloBob}`);

consolePrint(`value: ${brendan}, type: ${typeof brendan}`);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // flase

consolePrint(`value: ${canRead}, type: ${canRead}`);
consolePrint(`value: ${test}, type: ${test}`);

// null
let nothing = null;
consolePrint(`value: ${nothing}, type: ${nothing}`);

// undefined
let x;
consolePrint(`value: ${x}, type: ${x}`);

// symbol. create unique identifiers for objectys
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
consolePrint(symbol1 === symbol2);

const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
consolePrint(gSymbol1 === gSymbol2);

consolePrint(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// object, real-life object, data structrure
const ekk = { name: 'ekk', age: 25 };
ekk.age = 20;

// 5. Dynamic typing: dynamically typed language
let text = 'hello';
consolePrint(text.charAt(0));
consolePrint(`value: ${text}, type: ${typeof text}`);
text = 1;
consolePrint(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
consolePrint(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
consolePrint(`value: ${text}, type: ${typeof text}`);

function consolePrint(cText) {
	console.log(cText);
	document.getElementsByClassName('dcConsoleText')[0].innerHTML += '<br>' + cText;
}