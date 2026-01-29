let student ={
name :"firstname",
email:"USERNAME",
course:"javascript,React,Node",
marks:[45,78,60,90,33],
hobbies:["Music","Cricket","Reading"],
address:["India",["Gujarat","Ahmedabad",]]
};

 let trimText = student.name.trim();
console.log(trimText);

console.log("toUpperCase():", student.name.toUpperCase());
console.log("toLowerCase():", student.email.toLowerCase());

console.log("includes():", student.course.includes("React"));
console.log("indexOf():", student.course.indexOf("Node"));

let rep= student.course.replace("javascript","js");
console.log("replace():",rep);

    console.log("length():",student.name.length);
