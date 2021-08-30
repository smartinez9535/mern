//1
console.log(hello);                                   
var hello = 'world';                                 

/* var hello
console.log(hello);
hello = 'world' */

//2
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}

/* var needle;
needle = "haystack";
function test(){
    var needle;
    needle = 'magnet';
    console.log(needle); //magnet
}
test(); */

//3
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

/* var brendan
brendan = 'super cool'
/* function print(){} */ //Seen but not called
//console.log(brendan) //super cool */

//4
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

//var food;
//food = "chicken"
//console.log(food) // "chicken"
//function eat()
//food = "half-chicken"
//console.log(food) // "half-chicken"
//var food;
// food = "gone"

//5
mean();
console.log(food);
var mean = function() { // var can't = function?
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

//After running, realized mean is not defined, errors out
//mean();
//console.log(food); //undefined
//var mean;
//mean = function()
//var food;
//food = "chicken"
//console.log(food)
//food = "fish"
//console.log(food) //"fish"
//console.log(food) // undefined

//6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

//console.log(genre) //undefined
//var genre
//genre = "disco"
//function rewind();
//var genre
//genre = "rock"
//console.log(genre) //rock
//var genre
//genre = "r&b"
//console.log(genre) //"r&b"
//console.log(genre) //"disco"

//7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

//dojo
//dojo = "san jose"
//console.log(dojo) //"san jose"
//learn()
//dojo
//dojo = "seattle"
//console.log(dojo) //"seattle"
//var dojo
//dojo = "burbank" //"burbank"

//console.log(dojo) //"san jose"

//8
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}

//console.log(makeDojo("Chicago", 65))
//function makeDojo("Chicago", 65)
//const dojo = {}
//dojo.name
//dojo.name = "Chicago"
//dojo.students
//dojo.students = 65
//if(dojo.students > 50) //true
//dojo.hiring
//dojo.hiring = true
//dojo

//console.log(makeDojo("Berkeley", 0))
//function makeDojo("Berkely", 0)
//const dojo = {}
//dojo.name
//dojo.name = "Berkely"
//dojo.students
//dojo.students = 0
//if(dojo.students > 50) //false
//else if (dojo.students <= 0) //true
// dojo = "closed for now" //after running, causes error as assigning to a const
//"closed for now"
