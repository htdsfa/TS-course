function Logger(logString: string) {
    return function (constructor: Function) {
        console.log(logString);
        console.log(constructor)
    }
}

function WithTemplate(template: string, hookId: string) {
    return function (constructor: any) {
        console.log('Rendering template')
        const hookEl = document.getElementById(hookId);
        const p = new constructor();
        if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector('h1')!.textContent = p.name;
        }
    }
}

//@Logger('LOGGING - PERSON')
@Logger('LOGGING')
@WithTemplate('<h1>My Person Object</h1>', 'app')
class Person {
    name = 'Max'

    constructor() {
        console.log('Creating person object')
    }

}

const pers = new Person();
console.log(pers)

function Log(target: any, propertyName: string | Symbol) {
    console.log('Property decorator')
    console.log(target, propertyName)

}

class Product {
    @Log
    title: string
    private _price: number

    ser

    price(val: number) {
        if (val > 0) {
            this._price = val
        } else {
            throw new Error('Invalid price')
        }

    }

    constructor(t: string) {
        this.title = t
        this._price = p
    }

    getPriceWithTax(tax: number) {
        return this._price * (1 + tax);

    }
}