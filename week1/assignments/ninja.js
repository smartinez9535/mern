class Ninja{
    constructor(name){
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }

    sayName(){
        console.log("This is your name: " + this.name);
    }

    showStats(){
        console.log("Name: " + this.name + "\n Strength: " + this.strength);
        console.log("Speed: " + this.speed + "\n Health: " + this.health);
    }

    drinkSake(){
        this.health += 10;
    }
}

const ninja1 = new Ninja("Scorpion");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();