class Person {
    
    constructor(name, surname, age) {
        this._name = name
        this._surname = surname
        this._age = age
    }

    get name () {
        return this._name
    }

    get surname () {
        return this._surname
    }

    get age () {
        return this._age
    }

    set name (data) {
        this._name = data
    }

    set surname (data) {
        this._surname = data
    }

    set age (data) {
        this._age = data
    }

    eat() {
        console.log(`${this.name} has eating`);
    }

    sleep() {
        console.log(`${this.name} has sleeping`);
    }
}

const person1 = new Person('Jander', 'Teodoro', 23)
