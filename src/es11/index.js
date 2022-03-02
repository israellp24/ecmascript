const button = document.getElementById("btn");

button.addEventListener("click", async ()=>{
    const module = await import("./file.js");
    module.hello();
})

//---------------------------------------------
//agregarle n al final para activar bigintnumber
const aBigNumber = 9283747223428273n;
//Ahora se puede realizar de esta manera sin necesidad de la n al final
const anotherBigNumber = BigInt(9283747223428273n);
console.log(aBigNumber);
console.log(anotherBigNumber);

//---------------------------------------------

const promise1 = new Promise((resolve,reject) => reject("reject"));
const promise2 = new Promise((resolve,reject) => resolve("resolve"));
const promise3 = new Promise((resolve,reject) => resolve("resolve 1"));
//.all para en un reject y allSettled continua para todas las promesas
Promise.allSettled([promise1,promise2,promise3])
    .then(response => console.log(response))

//---------------------------------------------
// 🌎 Global This

console.log(window);
console.log(globalThis);

//---------------------------------------------
//Nuevo operador lógico: null operator
const fooo = null?? 'default string';
console.log(foo);

//---------------------------------------------
//Optional chaining
const user = {};
console.log(user?.profile?.email);

if(user?.profile?.email){
    console.log('email');
}else{
    console.log('fail');
}

//---------------------------------------------

