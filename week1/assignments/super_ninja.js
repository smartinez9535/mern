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
        console.log("Drink");
    }
}

class Sensei extends Ninja{
    constructor(name){
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }

    speakWisdom(){
        this.drinkSake();
        console.log("People die when they are killed.")
    }

}

const ninja1 = new Ninja("Scorpion");
ninja1.sayName();
ninja11.showStats();
ninja1.drinkSake();
ninja1.showStats();

const sensei1 = new Sensei("Raiden");
sensei1.sayName();
sensei1.showStats();
sensei1.speakWisdom();
sensei1.drinkSake();
sensei1.showStats();