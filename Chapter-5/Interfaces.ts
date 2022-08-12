interface Greetable {
    name: string;

    greet(phrase: string): void;
}

class Person implements Greetable {
    name: string;
    age: 19;

    constructor(n: string) {
        this.name = n;
    }

    greet(phrase: string) {
        console.log(phrase + '' + this.name);
    }
}

let user1: Greetable;

user1 = Person('Max')
user1.greet('hello')
console.log(user1)