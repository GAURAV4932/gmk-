// object is collection of any data 
// const person = {
//     name: "gaurav",
//     age: 30,
//    hobbies: ["cricket", "listen music" ],
//     greet : function() {
//         console.log("Hello");
//     }
// }

// // access values from object
// console.log( person);
// console.log(person['age']);

// // add or modify the data of object 
// person .job="react developer";
// person.salary=50000;
// console.log("person");

// delete person.salary;
// console.log(person);

// // nested object
// const person1={
//     name:"dip",
//     age:30,
//     addres:{
//         city:'ksd',
//         zipcode:'362220',
//         street:'123 main street'
//     }
// }

//  console.log(person1);
//  console.log(person1?.addres?.city);
//  console.log(Object.keys(person1));
//  console.log(Object.values(person1));
//  console.log(Object.entries(person1));       


 const user ={
    name : "user",
    role:"Admin",
    designation:"devloper",
    age:24,
    address:{
        city:"ksd",
        zipcode:"362220",
        street:"123 main"
    }
}

 //const{name,age,role}=user
//console.log(name,age,role);

const{name,age , role , state = "gujarat"}=user 
//console.log(name,age,role,state)

const array=[1,2,3]
const moreElemets = [...array,4,5,6]
//console.log(moreElemets)
const originalArray= [1,2,3,4,5]
const copiedArray = [...originalArray]
//console.log(copiedArray)

const arr1=[1,2,3]
const arr2=[4,5,6]
const mergedArray = [...arr1,...arr2]
//console.log(mergedArray)

// spread opt. in pbj 
const user1 = {
    name:"user1",
    city:"ksd"
}

console.log(user1)
 
const newObj={
    ...user1,
    role:"react devloper",
}
console.log(newObj)

const user2={
    age:25,
    salary:"50000",
}
console.log(user2)

const user3={
    ...user1,
    ...user2
}
console.log(user3);


