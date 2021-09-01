const data = ["leopard", "giraffe", "zebra", "elephant", "monkey", "lion"];

const people = [
    {name: "bob", age: 40},
    {name: "john", age: 45},
    {name: "maria", age: 23}
]

const newPeople = people.filter( (person, idx) => person.age > 30);
const yy = newPeople.map( person => person.age++);
console.log(newPeople);

const filteredData = data.filter( (x, i) => {
    //console.log(i+1);
    return x.includes("o")
    }).map( (elem, idx) => elem + " contains an 'o'"); // must return true (includes in array) or false (excludes from array)
//console.log(filteredData);

const x = data.map( (elem, idx) => { //long way to write
    return `${idx + 1} - ${elem} is cool`;
})

const x1 = data.map((elem, idx) => elem + " is cool " + idx) //short way to write

//const x2 = animals.forEach(animal => console.log(animal + " is cool")); //returns undefined if logged, doesn't return anything

//console.log(x1);