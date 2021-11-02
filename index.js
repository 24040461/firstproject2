//Hello world

class Pig {
    constructor (name, size, healthy, sex, alive){
        this.name = name;
        this.size = size;
        this.healthy = healthy;
        this.sex = sex;
        this.alive = alive;
    }
    pigScraps(){
        this.size += 10;
    }
}
class Hen {
    constructor (name, size, jump, hunger, alive){
        this.name = name;
        this.size = size;
        this.jump = jump;
        this.hunger = hunger;
        this.alive = alive;
    }
    eat(){
        this.hunger += 10;
        this.size += 1
    }
    doze(pig){
        this.hunger -= 44;
        if(this.hunger < 10){
            this.alive = false;
            pig.pigScraps();
        } 
    }
  
}

class Cow {
    constructor (name, size, healthy, sex, alive){
        this.name = name;
        this.size = size;
        this.healthy = healthy;
        this.sex = sex;
        this.alive = alive;
    }
   
}
const bob = new Hen('Bob', 55, 45, 35, true)
const scott = new Hen('Scott', 85, 15, 85, true)
const jill = new Cow('Jill', 40, 5, "Male",true)
const bill = new Cow('Bill', 30, 75, "Female", true)
const sally = new Pig('Sally', 66, 58, "Female", true)

module.exports = {
    Hen,
    Cow,
    Pig,
    scott,
    jill,
    bill,
    sally,
    bob
}

