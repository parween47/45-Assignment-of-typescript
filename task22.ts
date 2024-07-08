// . More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array


let Name :string="Ubaid"
console.log(Name=="ubaid");
console.log(Name!=="ubaid");

console.log(Name.toLowerCase()=="Ubaid")
console.log(Name.toLowerCase()=="ubaid")

let num1:number=1
let num2:number=8
console.log(num1==num2);
console.log(num1!==num2);

console.log(num1>num2);
console.log(num1<num2);

console.log(num1>=2);
console.log(num2<=8);

console.log(num2<=8&&Name=="shahrukh");
console.log(num2<=8||Name=="shahrukh");

let arr:number[]=[1,2,3,4,4,5]
console.log(6 in arr);
console.log(4 in arr);


