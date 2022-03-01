function newFunction(name, age, country){
    var name=name || 'israel';
    var age = age || 26;
    var country = country || 'MX';
    console.log(name,age,country);
}

//es6
function newFunction2(name='israel',age=26,country='MX'){
    console.log(name,age,country);
}

newFunction();
newFunction2();
//----------------------------------------------------------------------

let hello = "hello";
let world = "world";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

//es6
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

//----------------------------------------------------------------------

let lorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus voluptatem repudiandae minus id natus nemo, eos quisquam consequatur! \n"
+ "Sint laborum aperiam et maxime ducimus modi a sequi nihil accusantium iste?";

//es6
let lorem2 = `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
Possimus voluptatem repudiandae minus id natus nemo, eos quisquam consequatur!
Sint laborum aperiam et maxime ducimus modi a sequi nihil accusantium iste?`

console.log(lorem);
console.log(lorem2);

//----------------------------------------------------------------------
let person ={
    'name': 'oscar',
    'age': 32,
    'country': 'MX'
}

console.log(person.name,person.age);

//es6
let {name,age} = person;
console.log(name,age);
//----------------------------------------------------------------------

let team1 = ['israel', 'julian', 'ricardo'];
let team2 = ['valeria', 'Yesica', 'Camila'];

let education = ['David', 'israel', 'julian', 'ricardo', 'valeria', 'Yesica', 'Camila'];

//es6
let education2 = ['David', ...team1, ...team2];

console.log(education);

//----------------------------------------------------------------------

{
    var globalVar = "Global Var";
}

{
    let globalLet = "Global Let";
    console.log(globalLet);
}

console.log(globalVar);

const a = 'b';

console.log(a);

//----------------------------------------------------------------------

let name = 'israel';
let age = 32;

//es5
obj = {name:name,age:age};

//es6
obj2= {name,age};

console.log(obj2);

//----------------------------------------------------------------------

const names= [
    {
        name: 'Oscar',
        age: 32,
    },
    {
        name: 'Yesica',
        age: 27,
    }
]


let listOfNames= names.map(function(item){
    console.log(item.name);
})

let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames3 = (name, age, country) => {
    //codigo...
}

const listOfNames4 = name => {
    //codigo...
}

const square = num => num * num;

//Promesas, funciona para apis
const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if(false){
            resolve('Hey!');
        }else{
            reject('Ups!!');
        }
    });
}

helloPromise()
    .then(response => console.log(response))
    .catch(error => console.log(error))



//----------------------------------------------------------------------

class calculator {
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();

console.log(calc.sum(2,2));



import {hello} from './module.js';
hello();

//* para identificar que es un generator
function* helloWorld(){
    if (true) {
        yield 'Hello, ';
    }
    if (true) {
        yield 'World';
    }
};

const generatorHello = helloWorld();

console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
