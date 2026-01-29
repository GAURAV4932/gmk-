// string methods
// length()
// trim ()
// Ltrim()left side space remove in text 
// Rtrim() right side space remove in text
// toUpperCase()
// toLowerCase()
// includes()
// indexOf()
// slice()
// substring()
// replace()
// concat
// split()

let str = "Hello javascript word";
// console.log(str);

// console.log("length():", str.length);

// let trimText = str.trim();
// console.log("trim():", trimText);

// console.log("toUpperCase():", str.toUpperCase());

// console.log("toLowerCase():", str.toLowerCase());

// console.log("includes():", str.includes("javascript"));

// console.log("indexOf():", str.indexOf("javascript"));

// console.log("slice():", str.slice(1, 32));

// console.log("substring():", str.substring(0, 12));

// let rep= str.replace("Hello","hyyy");
// console.log("replace():",rep);

// let rep1= "hello react";
// console.log("concat():", str.concat(rep1));

// console.log("split():", str.split(" "));


///////////////////////////////////////////////////////////////////////////////////////////////////////////
// array methods

// length()
// push()
// pop()
// pop()
// unshift()
// shift()
// concat()
// includes()
// indexOf()
// splice()
// slice()
// join()
// delete()
// map()
// filter()
// find ()
// foreach()
// sort()
// reverse() 
// flat ()

let arr = ['one','two','three',1,{name:'name'}]
console.log("default array:",arr);

console.log("length():",arr.length);

//console.log("push()",
arr.push("add new");
console.log("array after push",arr)

arr.pop();
console.log("array after pop",arr)

arr.unshift("first add");
console.log("array after unshift",arr)

arr.shift()
console.log("array after shift",arr)

let newArr=["str 1","str 2"];
let mixedArr = arr.concat(newArr);
console.log("default array after concat:",arr);
console.log("array after concat",mixedArr);

console.log("includes():",arr.includes("three"));

console.log("indexOf():",arr.indexOf("two"));
