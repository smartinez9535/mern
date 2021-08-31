class Card{
    constructor(name, cost){
        this.name = name;
        this.cost = cost;
    }
}


class Unit extends Card{
    constructor(name, cost, power, resilience){
        super(name, cost);
        this.power = power;
        this.resilience = resilience;
    }

    attack(target){
        console.log("\n" + target.name + " resilience: " + target.resilience);
        console.log(this.name + " attacks " + target.name);
        target.resilience -= this.power
        console.log(target.name + " resilience: " + target.resilience);
    }
}

class Effect extends Card{
    constructor(name, cost, text, stat, magnitude){
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }

    play(target){
        if (target instanceof Unit){
            if (this.stat == "resilience"){
                console.log("\n" + target.name + " " + this.stat + ": " + target.resilience);
                console.log("Playing " + this.name + " on " + target.name + ": " + this.magnitude);
                target.resilience += this.magnitude;
                console.log(target.name + " " + this.stat + ": " + target.resilience);
            }
            else if (this.stat == "power"){
                console.log("\n" + target.name + " " + this.stat + ": " + target.power);
                console.log("Playing " + this.name + " on " + target.name + ": " + this.magnitude);
                target.power += this.magnitude;
                console.log(target.name + " " + this.stat + ": " + target.power);
            }
        }
        else{
            throw new Error("Target must be a unit!");
        }
    }
}

const redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);
const hardAlgorithm = new Effect("Hard Algorithm", 2, "Increase target's resilience by 3", "resilience", 3);
hardAlgorithm.play(redBeltNinja);
const blackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4);
const unhandledPromiseRejection = new Effect("Unhandled Promise Rejection", 1, "Reduce target's resilience by 2", "resilience", -2);
unhandledPromiseRejection.play(redBeltNinja);
const pairProgramming = new Effect("Pair Programming", 3, "Increase target's power by 2", "power", 2);
pairProgramming.play(redBeltNinja);
redBeltNinja.attack(blackBeltNinja);
