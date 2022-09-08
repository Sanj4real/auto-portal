// let a = { a: 'b', a: 'b' }

// // required : {1:2,2:3,3:4}

// console.log(Object.values(a))

let a = [1, 2, 3];
// let b = a jaha a ko value store xa tei ma point out garera basxa

let b = [...a]; //spread operator

b.push(4); //mutation
// array and objects are mutable data types
// b=a garera a ko value b ma assign garda

console.log(a);

let c = 5;
let d = c;
d = d + 5;

console.log(c);
