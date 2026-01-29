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

const person1={
    name:"dip",
    age:30,
    addres:{
        city:'ksd',
        zipcode:'362220',
        street:'123 main street'
    }
}

 console.log(person1);
 console.log(person1?.addres?.city);
 console.log(Object.keys(person1));
 console.log(Object.values(person1));
 console.log(Object.entries(person1));       


 