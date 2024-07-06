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


function mySquare() {
    document.getElementById("demo").innerHTML = "Oh Nooo FAAA-KEEEEE!!!!!";
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

//Object
const girl = {
    firstName: "Tin",
    lastName: "Arroyo",
    age: 18,
    eyeColor: "black",
    sayHello: function(){console.log("Hi! Ako si Tin!")},
}

girl.sayHello();

//Object Properties
const she = {
    firstName: "Alexandra",
    lastName: "Ramos",
    age: 21,
    eyeColor: "blue"
  };
  
  delete she.age;

  document.getElementById("demo11").innerHTML = she.firstName + " is " + she.age + " years old.";

document.getElementById("demo6").innerHTML = 
person.firstName + " is " + person.age + " years old.";

function myButton2() {
    document.getElementById("demo8").innerHTML = "Its Gone.";
}

let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
document.getElementById("demo9").innerHTML = text.length;

let answer1 = "yea";
let answer2 = "yeayea";
let answer3 = "yeayeayea";

//Boolean
var data = true;

if (data) {
    console.log("Mahal ka niya");
} else {
    console.log("Di ka niya Mahal")
}

//null
var n = null
console.log(n * 50)

//undefined
var e;
console.log(e + 20)

//number
var num = 3.6;
var ber = 7.4;
console.log(num + ber);

//String
var name = "Neng";
console.log("Hi Im the youngest, My Name is " + name);

//Symbol
var sym1 = Symbol("yea");
var sym2 = Symbol("yea");
console.log(sym1 === sym2);
console.log(String(sym1));

//Object
var myPen = new Object();
myPen.make = "Faber Castle";
myPen.model = "Black Ballpen";

console.log(myPen.make);

//Function
function greet(name) {
    console.log(" Hello " + name);
}

greet("User");


 