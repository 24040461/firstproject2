//Hello world

class Hen {
    constructor (name, size, jump, hunger){
        this.name = name;
        this.size = size;
        this.jump = jump;
        this.hunger = hunger;
    }
    eat(){
        this.hunger += 10;
        this.size += 1
    }
    sleep(){
        this.hunger = 5;
    }
}
class Pig {
    constructor (name, size, healthy, sex){
        this.name = name;
        this.size = size;
        this.healthy = healthy;
        this.sex = sex;
    }
}
class Cow {
    constructor (name, size, healthy, sex){
        this.name = name;
        this.size = size;
        this.healthy = healthy;
        this.sex = sex;
    }
}
const bob = new Hen('Bob', 55, 45, 35)
const scott = new Hen('Scott', 85, 15, 85)
const jill = new Cow('Jill', 40, 5, 22)
const bill = new Cow('Bill', 30, 75, 65)
const sally = new Pig('Sally', 66, 58, 76)

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