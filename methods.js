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
console.log(str);

console.log("length():", str.length);

let trimText = str.trim();
console.log("trim():", trimText);

console.log("toUpperCase():", str.toUpperCase());

console.log("toLowerCase():", str.toLowerCase());

console.log("includes():", str.includes("javascript"));

console.log("indexOf():", str.indexOf("javascript"));

console.log("slice():", str.slice(1, 32));

console.log("substring():", str.substring(0, 12));

let rep= str.replace("Hello","hyyy");
console.log("replace():",rep);

let rep1= "hello react";
console.log("concat():", str.concat(rep1));

console.log("split():", str.split(" "));