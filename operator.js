'use strict';

// 1. String concatenation
console.log('my' + 'cat');
console.log('1', + 2);
console.log(`string literals:

...
1 + 2 = ${1 + 2}`);

// 2. Numeric operators
console.log(1 + 1); //add
console.log(1 - 1); //substract
console.log(1 / 1); //divide
console.log(1 * 1); //multiply
console.log(5 % 2); //remainder
console.log(2 ** 3); //exponentiation

// 3. Increment and decrement operators
let counter = 2;
console.log(`counter: ${counter}`);
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`++counter --> preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`counter++ --> postIncrement: ${postIncrement}, counter: ${counter}`);

// 4. Assignment operators
let x = 3;
let y = 6;
let xy1 = x += y; // x = x + y;
let xy2 = x -= y, xy3 = x *= y, xy4 = x /= y;
console.log(`x += y : ${xy1}, x -= y : ${xy2}, x *= y : ${xy3}, x /= y : ${xy4}, `);

// 5. Comparison operators
console.log(10 < 6); //less than
console.log(10 <= 6); //less than or equal
console.log(10 > 6); //greater than
console.log(10 >= 6); //greater than or equal

// 6. Logical operators: || (or), && (and), ! (not)
// 연산이 오래 걸리는 값은 뒤로 배치해서, 앞에서 true 일 경우 처리 되도록 코딩
const value1 = true;
const value2 = 4 < 2; //false

// || (or), finds the first truthy value
console.log(`or: ${value1 || value2 || check()}`);

// && (and), finds thr first falsy value
console.log(`and: ${value1 && value2 && check()}`);

// often used to compress long if-statement
// nullableObject && nullableObject.something
// if(nullableObject != null) { nullableObject.something; }

function check() {
	for (let a = 0; a < 10; a++) {
		//wasting time
		console.log('check');
	}
	return true;
}

// ! (not)
console.log(`! (not) ${value1} : ${!value1}`);

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(`stringFive == numberFive : ${stringFive == numberFive}`);
console.log(`stringFive != numberFive : ${stringFive != numberFive}`);

// == strict equality, no type conversion
console.log(`stringFive === numberFive : ${stringFive === numberFive}`);
console.log(`stringFive !== numberFive : ${stringFive !== numberFive}`);

// object equality by reference
const ellie1 = { name: 'ellie' };
const ellie2 = { name: 'ellie' };
const ellie3 = ellie1;
console.log('ellie1 == ellie2 --> ' + (ellie1 == ellie2));
console.log('ellie1 === ellie2 --> ' + (ellie1 === ellie2));
console.log('ellie1 === ellie3 --> ' + (ellie1 === ellie3));

// equality - puzzler
console.log(0 == false); //true
console.log(0 === false); //false
console.log('' == false); //true
console.log('' === false); //false
console.log(null == undefined); //true
console.log(null === undefined); //false
console.log(`null type is ${typeof null}, undefined typs is ${undefined}`);

// 8. Conditional operators: if
// if, else if, else
const name = 'aaa';
if(name === 'aaa') {
	console.log('You are name is aaa');
} else if(name === 'bbb') {
	console.log('You are name is bbb');
} else {
	console.log('Unkwnon');
}

// 9. Ternary operator: ?
// condition ? value1 : value2;
console.log(name === 'aaa' ? 'print aaaa' : 'noooooooooooooooo');

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'Firefox';
switch(browser) {
	case 'IE':
		console.log('go away!');
		break;
	case 'Chrome':
		// console.log('love you!');
		// break;
	case 'Firefox':
		console.log('ff bbb');
		break;
	default:
		console.log('default................');
		break;
}

// 11. Loops
// while loop, while the condition is truthy,
// body code is exceted.
let i = 3;
while(i > 0) {
	console.log(`while: ${i}`);
	i--;
}

// do while loop, body code is excuted first,
// then check the condition.
do {
	console.log(`do while: ${i}`);
	i--;
} while(i > 0);

// for loop, for(begin; condition; step)
for(i = 3; i > 0; i--) {
	console.log(`for: ${i}`);
}

for(let i = 3; i > 0; i = i - 2) {
	console.log(`inline variable for: ${i}`);
}

// nested loops
for(let a = 0; a < 3; a++) {
	for(let b = 0; b < 5; b++) {
		console.log(`a: ${a}, b: ${b}`);
	}
}

// break, continue
// Q1. iterate from 0 to 10 and print only even numbers (use continue)
for(let n = 0; n < 11; n++) {
	if(n % 2 !== 0) {
		continue;
	}
	console.log(`Q1: ${n}`);

	// not use continue
	// if(n % 2 === 0) {
	// 	console.log(`Q1: ${n}`);
	// }
}

// Q2. iterate fro m0 to 10 and print number until reaching 8 (use break)
for (let n = 0; n < 11; n ++) {
	if(n > 8) {
		break;
	}
	console.log(`Q2: ${n}`);
}