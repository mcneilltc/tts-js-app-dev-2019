**Template literals**
````javascript
console.log(`Hello! I'm a string
continues on this line`);// pressed enter and the line continued

const name = "Jimmy"
const day =" Wednesday"
const instructor = {//ES6
    name: "Chris",
    lesson: "ES6",
    greet: function(){
        return `Hellow ${this.name} whatever lesson is ${this.lesson}`
    }
}

console.log("Hello" + name + "I hope you have a great day on" +day);
````

**es6 way**

````javascript
console.log(`Hello ${name} I hope ${day} goes well`)
console.log(`${instructor.name} will be teaching ${instructor.lesson} today`)

console.log(instructor.greet());
````

**var let const**

````javascript
 function foo(){
 let x =true;
 if(x){
     var usingVar = "I'm using var";//hoisting happens with the var- its usually at the top of the function and can be used through the whole thing
 }
 console.log(usingVar)
 }
 foo();

 function foo(){
     let x =true;
     if(x){
         let usingVar = "I'm using let";//using let gives you more control of your variables
     }
     console.log(usingVar)
     }
     foo();// will log undefined
````
 
 **typeError**
 
 ````javascript
 const instructors =["Jimm", "Christ"]
 //instructors=["Jim", "Chris"]//won't work because the const has all ready been assigned
 instructors.push("Jack", "Jill")// this method adds new instructors to the array
 console.log(instructors)

 function  hello(name){
     name =name || "Mystery Person";
     console.log("Hello" + name + "!")
 }
hello("Bobby");
hello();


function hello(name = "Mystery Person"){
    console.log(`Hello ${name} is it me you're looking for`)
}
````

**Arrow functions!**

````javascript
const teacher ={
    name: "Jimm",
    speak: function(){
        ///bind a fuction to a specific context
        let boundFunction = function{
        console.log('later my name is' + this.name);
    }.bind(this);//have to explicitly use bind.this in order to pull out the this.name since this.name is sutck inside hte function
    //bound function will always run in bound context
    setTimeout(boundFunction, 1000);
}
};
teacher.speak();
const teacher = {
name: "Jimm",
speak:(){
    let boundFunction = () => {// take out the function and replace with ()=> and then remove .this.name
    console.log('later my name is' + this.name);
};
setTimeout(boundFunction, 1000);

}};
teacher.speak();
````

 **lexical Binding**-they bind to scope where defined not where they are used

````javascript
let students =[
    {name: 'Hugo'},
    {name: 'Candace'},
    {name: 'Taylor'},
    {name: 'Dimitri'}

];
let names = students.map((student)=> student.name);// .map is the function, student is the argument there is an implict return happening.
let names = students.map((student) =>{
    return student.name
})// this will return the same value as above, its just that there is the
console.log(names);


function add(){
    console.log("arguments object:", arguments);

    var numbers = Array.prototype.slice.call(arguments);
    var sum = 0;

    numbers.forEach(function (number){sum += number;
    });
    return sum;
}
console.log(add(1,2,3,4,5,6,7,8));
````

**The ES6 way**

````javascript
let add = (...numbers) => {// ... is the rest operator for the parameter
    console.log("rest parameters", numbers)
    let sum= 0;
    numbers.forEach(function(number){
        sum += number;
    })
    return sum;
}
console.log(add(1,2,3,4,5,6,7,8));
````

**rest parameter**

````javascript
let add2 =(...numbers) =>numbers.reduce((sum, number)=> sum += number, 0);// reduce takes in all the numbers and returns it as an array. 0 is where you want the function to start in the array
console.log(add2(1,2,3,4,5,6,7,8));


function addStuff(x, y, ...z){
    //make sure he rest element is at the end of the arugment
    return (x+y) * z.length
}
console.log(addStuff(1,2, "hello", "world", true, 99));// returns 12 because the length of array z is 4, the last 4 items in the parameters are taken in as an array of z.
````

**spread operator**

````javascript
let random = ["hellow", "world", true, 99]
let newArray = [1,2, ...random, 3]
console.log(newArray);

let spreadEX =(item) => {
    let spreadArray = [...item]
    console.log(spreadArray);
    return spreadArray
}
spreadEX("Hello World");
//[ 'H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd' ], breaks apart each piece of the arugment and returns it into  an array

let restEX = (...z) => {
    console.log(z)
    return z
} 
restEX("hello", "world")
[ 'hello', 'world' ] is returned as an array

var students = ["julian", "aj", "matt"];
var x = students[0];
var y = students[1];
var z = students[2];

console.log (x, y, z);
````

**es6 destructuring**

````javascript
let students = ["julian", "aj", "matt"];
let[x,y,z] = students// get all three names in the array
let[x, ,z] = students// will omit aj

let[x, ...rest] = students;
console.log(x, rest);// will get julian ["aj", "matt"]

let completedHomework = ()=> {
    return["Julian", "AJ", "Matt"];
}
let [x,y,z]= completedHomework();
console.log(x,y,z);
// if it is a string then it will return each part of the string and if it is an array we want to return each part of the array


//also works with objects
let instructor = {
    name: "jimmy",
    email: "no@no.com"
}
let { name: x, email: y}= instructor;

console.log(x);

make object
make function with default param
return both

let family = {
    mom: "Kat",
    dad: "Doug",
    kid1: "Wren",
    kid2: "Chuck"
}
function fam(){
    console.log(family.mom, family.dad, family.kid1, family.kid2)
}
//let { mom: a, dad: b, kid1: c, kid2:d} = family;//?
fam(family);// returns kat doug wren and chuck

let car ={
    make: "Honda"
}
function something({make, year = 2001}){
    console.log(make, year);
}
something(car);///returns Honda 2001
````

**constructors**
````javascript
function Person(name, job){// create the template for the object that you want to use more than once. This means you won't have to repeat the same code
    this.name =name;
    this.job =job;
}
Person.prototype.getName = function getName(){
    return this.name;
}
Person.prototype.getJob = function getJob(){
    return this.job;
}
var goodGuy = new Person ("Aang", "Airbender");
console.log(goodGuy.getName, goodGuy.getJob)// [Function: getName] [Function: getJob]
console.log(goodGuy.getName(), goodGuy.getJob())// Aang Airbender

````
**Constructor updates**
````javascript
class Person{
    constructor(name, job){
        this.name =name;
        this.job=job;
    }
    getName(){
        return this.name;
    }
    getJob(){
        return this.job;
    }
}

let goodGuy = new Person('Neo', 'the one')
console.log(goodGuy);

class SuperHeros extends Person{
    constructor(name, heroName, superPower){
        super(name);// super keyword lets you use the existing name property in the object
        this.heroName = heroName;
        this.superPower = superPower;
    }
    secretidentity(){
        return `${this.heroName} is ${this.name}!!`
    }
}
let batman = new SuperHeros("Bruce Wayne", "Im Batman")
console.log(batman.secretidentity())// returns Im Batman is Bruce Wayne

class Person{
    constructor(name){
        this.name = name;
    }
    set name(name){
        this._name =name;
    }
    get name(){//lets us read teh object property
        return this._name
    }
}
let goodGuy = new Person('Jim Gordon');
console.log(goodGuy.name);// Jim Gordon
goodGuy.name = "James Gordon";
console.log(goodGuy.name);// James Gordon

let student = {name: "A-aron"};
let status = new Map();// lets us store key value pairs. since objects can convert to both keys and values and can convert them both to strings. Map is an object
status.set(student.name, "D-nice");
status.set("feeling", "churlish");
console.log(status.get(student.name));
console.log(status.get("feeling"))
````

***Encapsulating***-- you can't access a variable outside the scope unless you have a set or get
````javascript
const Guy = (function(){
    const  _name = Symbol();
    class Guy {
        constructor(name){
            this[_name]= name;
        }
            set name(name){
                this[_name]=name;
            }
            get name(){
                return this [_name];
            }
            
        }
return Guy;
    }());
    let guy = new Guy("Fieri");
    console.log(guy.name);

    const Guy = (function(){
        const  _name = new WeakMap();//WeakMap
        class Guy {
            constructor(name){
                this[_name]= name;
            }
                set name(name){
                    this[_name]=name;
                }
                get name(){
                    return this [_name];
                }
                
            }
    return Guy;
        }());
        let guy = new Guy("Fieri");
        console.log(guy.name);
````        
