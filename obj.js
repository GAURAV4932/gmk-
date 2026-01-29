// object is collection of any data 
const person = {
    name: "gaurav",
    age: 30,
   hobbies: ["cricket", "listen music" ],
    greet : function() {
        console.log("Hello");
    }
}

// access values from object
console.log( person);
console.log(person['age']);

// add or modify the data of object 
person .job="react developer";
person.salary=50000;
console.log("person");

delete person.salary;
console.log(person);