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

//Object Method
const mouse = {
    version: "VX7",
    brand: "Fantech",
    dpi: 800,
    fullName: function() {
      return this.version + " " + this.brand;
    }
  };

  document.getElementById("demo12").innerHTML = mouse.version + mouse.brand;

  //Object Display
  const guy = {
    name: "John",
    age: 30,
    city: "New York"
  };
  
  // Create an Array (hanay hanay)
  const myArray = Object.values(guy);
  
  // Display the Array
  document.getElementById("demo13").innerHTML = myArray;

  //Object Construction
function Men(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
  
  // Create a Person object
  const myFather = new Men("Alex", "Hayashi", 50, "blue");
  
  // Display age
  document.getElementById("demo14").innerHTML =
  "My father is " + myFather.age + "."; 
  
  //JS String Primitive
  const women = ("I Like to Code");
  
//JS Object
const boy = new String ("I'd prefer to Draw");

//String
let j = "javascript";
let k = new String ("node");

document.getElementById("demo15").innerHTML = typeof j + "<br>" +typeof k;

//String Method
const her = "Hanna";
let letter = her.at(2);

document.getElementById("demo16").innerHTML = letter;

let m = Number.MAX_VALUE
document.getElementById("demo17").innerHTML = m;

let v = Number.MIN_VALUE
document.getElementById("demo18").innerHTML = v;

const temp = [30,35,40,45,50,55,60];
let high = temp.findLast(x => x > 45);
document.getElementById("demo19").innerHTML = "The last temperature was over " + high;
temp.sort();
temp.reverse();
console.log(temp.sort()+","+ temp.reverse());

const points = [12,54,29,70,88,47,31,69,95];
document.getElementById("demo20").innerHTML = points;

function pindutan1() {
    points.sort();
    document.getElementById("demo20").innerHTML = points;
}
function pindutan2() {
    points.sort(function(a,b){return a - b});
    document.getElementById("demo20").innerHTML = points;
}

const points2 = [72,23,76,43,96,16];
document.getElementById("demo21").innerHTML = points2;

function pindutan3() {
    points2.sort(function(){return 0.5 - Math.random()});
    document.getElementById("demo21").innerHTML = points2;
}

console.log("hi almost 12 am");
console.log("fiesta ng bukal");

const h = new Date();
document.getElementById("demo22").innerHTML = h.toDateString();

console.log("hi");
console.log("format");

let msec = Date.parse("July 19,2024");
const l = new Date(msec);
document.getElementById("demo23").innerHTML = l;

document.getElementById("demo24").innerHTML = Math.PI;

function pindot() {
    document.getElementById("demo25").innerHTML = Math.floor(Math.random() * 101);
}

document.getElementById("demo26").innerHTML = Boolean (25 < 30);

function ageradar(){
    let age = document.getElementById("age").value;
    let voteable = (age<18) ? "Too young":"Old enough";

    document.getElementById("demo27").innerHTML = voteable + " to vote.";
}

const time = new Date().getHours();
let greeting;
if (time < 11 ) {
    greeting = "Good morning Tin";
} else if (time > 10 >= 20) {
    greeting = "Good Afternoon";
} else {
    greeting = "Good Evening";
}
document.getElementById("demo28").innerHTML = greeting;

let word;
switch (new Date().getDay()) {
    case 4:
    case 5:
        word = "Soon it is Weekend";
        break;
    case 0:
    case 6:
        word = "It is Weekend";
        break;
    default:
        word = "Looking forward to the Weekend";
}
document.getElementById("demo29").innerHTML = word;