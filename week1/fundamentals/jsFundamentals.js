//console.log(x);
//let x = "hello"; // let prevents hoisting, var causes it
/* const x = [11,22,33,44];
x.push(55);

const z = {
    name:"john",
    favFood:"pizza"
}
z.name = "bob";
//console.log(z);

let y = "hello"; // let does NOT get hoisted

// 1. var keyword is hoisted to the top of the scope
// 2. functions act as cages for scope
//          for loops also
// 3. assignments (=) stay where they are as anchors

for (let i = 0; i < 10; i++){ */
    //console.log(i);
//}

/* doStuff();

function doStuff(){
    var x; //hoist the variable, creates it
    x ="hi"; //assigns value to variable
}

//doStuff();
console.log(x); */

/* const person = { 
    firstName: 'Bob', 
    lastName: 'Marley', 
    email: 'bob@marley.com', 
    password: 'sekureP@ssw0rd9', 
    username: 'barley', 
    createdAt: 1543945177623
};

//                  a        b      c
const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];

const [,,c] = animals
//console.log(a);
//console.log(b);
console.log(c);

//const email = person.email;

const {email:personEmail, firstName, lastName} = person;
console.log(personEmail);
console.log(lastName);
console.log(firstName); */

const person = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: 'bob@marley.com',
    password: 'sekureP@ssw0rd9',
    username: 'barley',
    addresses: [
        {
            address: '1600 Pennsylvania Avenue',
            city: 'Washington, D.C.',
            zipcode: '20500',
        },
        {
            address: '221B Baker St.',
            city: 'London',
            zipcode: 'WC2N 5DU',
        }
    ],
    createdAt: 1543945177623
};

const personCopy = { ...person };
const personCopy = { ...person };
personCopy === person
// => false
personCopy.addresses === person.addresses
// => true





//const { addresses: [, sherlock] } = person;
//console.log(sherlock);

// PASS BY VALUE
let x = 10;
let y = 10;

y += x;

//console.log(x);
//console.log(y);

// PASS BY REFERENCE
let a = [10,20,30];
//let b = a; // b is a, if a changes, so does b
let copyA = [...a]; //b is a copy of all the values of a

a.push(99);

//console.log(a);
//console.log(b);

// --------------------------arrow functions------------------------------

function sayHello(name) {
    console.log('Hello ' + name);
};
//----------------------
//const sayHello2 = (name) => console.log('Hello ' + name);
const sayHello2 = (name) => {
    console.log('Hello ' + name); //multiple lines
}

//sayHello2();

const square = (num) => num*num; //one line, implicit return

const square = (num) => {
    this.window
    return num*num;
}

sayHello("bob");
sayHello2("john");

//--------------------------ternary operator -----------------------

var x = 11;

/* if (x > 10) {
    return "yes";
} else{
    return "no"
} */

x > 10 ? "yes" : "no";
