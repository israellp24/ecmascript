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

