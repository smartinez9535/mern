// Objects, Classes, Inheritance

const myBook = {
    title: "My Cool First Book",
    pages: 250,
    publishedYear: 2021
}

class Book{
    constructor(name, pages, publishedYear = 2021){
        //console.log(this);
        this.name = name;
        this.pages = pages;
        this.publishedYear = publishedYear;
    }
}
const myCoolBookClass = new Book("The best JS Book", 9001)
//console.log(myCoolBookClass);

//console.log(myBook);

class Vehicle{
    constructor(name, engine, miles=5){
        this.name = name;
        this.engine = engine;
        this.miles = miles;// || 5; //alternate way of doing a default value
    }

    drive(){
        this.miles += 10;
        console.log(this.name + " has driven:");
        console.log(`${this.miles} miles`); //tilda = `, not single quote = '
        return this;
    }

    honkHorn(){
        console.log("BEEP");
        return this;
    }
}
const myCoolCar = new Vehicle("Trusty", "V8", 10);
const ford = new Vehicle("Ford", "V12", 15);
//console.log(ford instanceof Vehicle) //returns true or false

//console.log(myCoolCar)
//myCoolCar.drive().drive().drive().drive().drive().honkHorn();

//console.log(myCoolCar);

//-------Inheritance
class Tesla extends Vehicle{
    constructor(name, engine, autopilot = false){
        super(name, engine);
        this.autopilot = autopilot;
    }

    drive(){
        this.miles += 50;
        console.log("Zoom Zoom");
        return this;
    }

    altDrive(){
        super.drive();
        return this;
    }
}

const modelX = new Tesla("Model X", "Electric");
modelX.altDrive().honkHorn();
console.log(modelX);