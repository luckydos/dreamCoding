'use strict';

// 1. String concatenation
consolePrint('my' + 'cat');
consolePrint('1', + 2);
consolePrint(`string literals:

...
1 + 2 = ${1 + 2}`);

// 2. Numeric operators
consolePrint(1 + 1); //add
consolePrint(1 - 1); //substract
consolePrint(1 / 1); //divide
consolePrint(1 * 1); //multiply
consolePrint(5 % 2); //remainder
consolePrint(2 ** 3); //exponentiation

// 3. Increment and decrement operators
let counter = 2;
consolePrint(`counter: ${counter}`);
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
consolePrint(`++counter --> preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
consolePrint(`counter++ --> postIncrement: ${postIncrement}, counter: ${counter}`);

// 4. Assignment operators
let x = 3;
let y = 6;
let xy1 = x += y; // x = x + y;
let xy2 = x -= y, xy3 = x *= y, xy4 = x /= y;
consolePrint(`x += y : ${xy1}, x -= y : ${xy2}, x *= y : ${xy3}, x /= y : ${xy4}, `);

// 5. Comparison operators
consolePrint(10 < 6); //less than
consolePrint(10 <= 6); //less than or equal
consolePrint(10 > 6); //greater than
consolePrint(10 >= 6); //greater than or equal

// 6. Logical operators: || (or), && (and), ! (not)
// 연산이 오래 걸리는 값은 뒤로 배치해서, 앞에서 true 일 경우 처리 되도록 코딩
const value1 = true;
const value2 = 4 < 2; //false

// || (or), finds the first truthy value
consolePrint(`or: ${value1 || value2 || check()}`);

// && (and), finds thr first falsy value
consolePrint(`and: ${value1 && value2 && check()}`);

// often used to compress long if-statement
// nullableObject && nullableObject.something
// if(nullableObject != null) { nullableObject.something; }

function check() {
	for (let a = 0; a < 10; a++) {
		//wasting time
		consolePrint('check');
	}
	return true;
}

// ! (not)
consolePrint(`! (not) ${value1} : ${!value1}`);

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
consolePrint(`stringFive == numberFive : ${stringFive == numberFive}`);
consolePrint(`stringFive != numberFive : ${stringFive != numberFive}`);

// == strict equality, no type conversion
consolePrint(`stringFive === numberFive : ${stringFive === numberFive}`);
consolePrint(`stringFive !== numberFive : ${stringFive !== numberFive}`);

// object equality by reference
const ellie1 = { name: 'ellie' };
const ellie2 = { name: 'ellie' };
const ellie3 = ellie1;
consolePrint('ellie1 == ellie2 --> ' + (ellie1 == ellie2));
consolePrint('ellie1 === ellie2 --> ' + (ellie1 === ellie2));
consolePrint('ellie1 === ellie3 --> ' + (ellie1 === ellie3));

// equality - puzzler
consolePrint(0 == false); //true
consolePrint(0 === false); //false
consolePrint('' == false); //true
consolePrint('' === false); //false
consolePrint(null == undefined); //true
consolePrint(null === undefined); //false
consolePrint(`null type is ${typeof null}, undefined typs is ${undefined}`);

// 8. Conditional operators: if
// if, else if, else
const name = 'aaa';
if(name === 'aaa') {
	consolePrint('You are name is aaa');
} else if(name === 'bbb') {
	consolePrint('You are name is bbb');
} else {
	consolePrint('Unkwnon');
}

// 9. Ternary operator: ?
// condition ? value1 : value2;
consolePrint(name === 'aaa' ? 'print aaaa' : 'noooooooooooooooo');

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'Firefox';
switch(browser) {
	case 'IE':
		consolePrint('go away!');
		break;
	case 'Chrome':
		// consolePrint('love you!');
		// break;
	case 'Firefox':
		consolePrint('ff bbb');
		break;
	default:
		consolePrint('default................');
		break;
}

// 11. Loops
// while loop, while the condition is truthy,
// body code is exceted.
let i = 3;
while(i > 0) {
	consolePrint(`while: ${i}`);
	i--;
}

// do while loop, body code is excuted first,
// then check the condition.
do {
	consolePrint(`do while: ${i}`);
	i--;
} while(i > 0);

// for loop, for(begin; condition; step)
for(i = 3; i > 0; i--) {
	consolePrint(`for: ${i}`);
}

for(let i = 3; i > 0; i = i - 2) {
	consolePrint(`inline variable for: ${i}`);
}

// nested loops
for(let a = 0; a < 3; a++) {
	for(let b = 0; b < 5; b++) {
		consolePrint(`a: ${a}, b: ${b}`);
	}
}

// break, continue
// Q1. iterate from 0 to 10 and print only even numbers (use continue)
for(let n = 0; n < 11; n++) {
	if(n % 2 !== 0) {
		continue;
	}
	consolePrint(`Q1: ${n}`);

	// not use continue
	// if(n % 2 === 0) {
	// 	consolePrint(`Q1: ${n}`);
	// }
}

// Q2. iterate fro m0 to 10 and print number until reaching 8 (use break)
for (let n = 0; n < 11; n ++) {
	if(n > 8) {
		break;
	}
	consolePrint(`Q2: ${n}`);
}

function consolePrint(cText) {
	console.log(cText);
	document.getElementsByClassName('dcConsoleText')[0].innerHTML += '<br>' + cText;
}