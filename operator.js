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
const value2 = 4 < 2;

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
console.log(!value1);

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(`stringFive == numberFive : ${stringFive == numberFive}`);
console.log(`stringFive != numberFive : ${stringFive != numberFive}`);

// == strict equality, no type conversion
console.log(`stringFive === numberFive : ${stringFive === numberFive}`);
console.log(`stringFive !== numberFive : ${stringFive !== numberFive}`);