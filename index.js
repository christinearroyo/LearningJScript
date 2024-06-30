//Eyy maalam na ahaha//
console.log('Hello World');

let firstName = 'Tin';
console.log(firstName);
let lastName = 'Arroyo';
console.log (lastName);
let age = 18;
console.log (age);
let isApproved = true;
console.log (isApproved);

let person = {
    name: 'Tin',
    age: 18
};

console.log(person)


function myFunction() {
    document.getElementById("demo").innerHTML = 
    "Oh Nooo Fa-keeee ahahahha";
}

let a, b, c;
a = 5;
b = 6;
c = a + b;
document.getElementById("demo1").innerHTML = c;

function myButton1() {
    document.getElementById("demo2").innerHTML = "Hello Friend!";
    document.getElementById("demo3").innerHTML = "How's it going?";
}

var x = 25;
let y = 50;
const z = x + y;

const cars = ["BMW","Honda","Suzuki","Toyota"]
cars[2] = "Audi";
cars.push("Ferrari");

document.getElementById("demo4").innerHTML = cars;

let f = 5;
let d = (250 + 100) * f;

const date = new Date ("2024-03-25");

function myFunction(p1, p2) {
    return p1 * p2;
}

let result = myFunction(4, 3);
document.getElementById("demo5").innerHTML = result;

const girl = {
    firstName: "Tin",
    lastName: "Arroyo",
    age: 18,
    eyeColor: "black"
};

document.getElementById("demo6").innerHTML = 
person.firstName + " is " + person.age + " years old.";