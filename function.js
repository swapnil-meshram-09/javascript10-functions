console.log(result);
console.log(typeof(result));

result();

function result() {
    console.log("function 1.");
}

result();




// variable function

// func();                   // error

const func = function(a,b) {                       // function g(){
    console.log("variable function.");
    return a*b;
}

console.log(func(2,2));

func(2,2);

// g();               // undefined






// arrow function
 
// arrow();               // error
 
const arrow = (a,b) => a+b;              // { return a*b;} = 4,  { a*b;} = undefined
console.log("Arrow Function.");


arrow(2,2);

console.log(arrow(2,2));








// function constructor


console.log('\n\n\n');


const result1 = new test('name',20);

const result2 = new test('name',20);

function test(name,age){
    this.myName = name;
    this.myAge = age;              // no return key word
}

console.log(test);


console.log(result1);
console.log(typeof(result1));


console.log(result1.myAge);



// console.log(result1==result2);          // false = two compare objs always proivde false

console.log(result1.myAge===result2.myAge);


// console.log(test.age);             //error =  treat func as object 








// self invoked function

(function test(){
    console.log('Testing...');
    
})();










