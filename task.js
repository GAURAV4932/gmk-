let student ={
name :"firstname",
email:"USERNAME",
course:"javascript,React,Node",
marks:[45,78,60,90,33],
hobbies:["Music","Cricket","Reading"],
address:["India",["Gujarat","Ahmedabad",]]
};

 student.name.trim();
console.log(student.name);

console.log("toUpperCase():", student.name.toUpperCase());

console.log("toLowerCase():", student.email.toLowerCase());

console.log("includes():", student.course.includes("React"));

console.log("indexOf():", student.course.indexOf("Node"));

 student.course.replace("javascript","js");

console.log("replace():",student.course);

console.log("length():",student.name.length);

student.course.split(",");

console.log("split():",student.course);

// array operations

student.hobbies.push("swimming");

console.log(student.hobbies);

student.hobbies.pop()
console.log(student.hobbies)

student.hobbies.unshift("drawing")
console.log(student.hobbies)

student.hobbies.shift()
console.log(student.hobbies);

let newar=student.hobbies.concat(student.course);
console.log(newar);

console.log("includes():",student.course.includes("React"));

console.log("indexOf():",student.course.indexOf("JS"));

console.log(student.marks.slice(0,2));

// let index = student.marks.splice(mark => mark < 35);
// console.log(index); 

console.log (student.hobbies.join(", "));

// array iteration methods
console.log("map:",student.marks.map(marks => marks + 5));

let filterMarks = student.marks.filter((mark) => mark >= 40);
console.log("filter():",filterMarks);

console.log("first rank():",student.marks.find(mark => mark > 80));

student.hobbies.forEach(hobby => {
    console.log(hobby);
});

console.log("sort():",student.marks.sort());

console.log("reverse():",student.address.reverse());

console.log("flat():",student.address.flat());

// object handling

student.result = student.marks.every(mark => mark >= 40) ? "Pass" : "Fail";

console.log(student);

const user=
{
    ...student 
}


