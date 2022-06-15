/*
    JavaScript Closures
*/


let subject = 'JavaScript'; // block scoped variable - Window Scope

function homework(student){
    console.log(`${student}, did you finish your ${subject} homework?`);
}

homework('Brian');

// console.log(student); // ReferenceError: student is not defined


// Scopes can be nested

let hometown = 'Chicago'; // Block scoped

{
    var state = 'Illinois'; // Globally Scoped
    let hometown = 'Champaign'; // Block Scoped
    {
        console.log(`I am from ${hometown}, ${state}`)
    }
}

console.log(`I am from ${hometown}, ${state}`)


// Function Scopes can also be nested

// function outer(){
//     let outerMessage = 'This is the outer message'
//     function inner(){
//         let innerMessage = ' and this is the inner message';
//         console.log(outerMessage + innerMessage); 
//     }
//     inner()
// }


// console.log(outer);

// outer();


// Return a function from a function

function outer(){
    let outerMessage = 'This is the outer message';
    function inner(){
        let innerMessage = ' and this is the inner message';
        console.log(outerMessage + innerMessage)
    }
    return inner
}


let outerReturn = outer(); // return value of the 

console.log(outerReturn);

outerReturn();

// inner() function is a closure
// A closure is a function that preserves the outer scope in its inner scope


// A more practical example

function makeMultiplier(x){
    function times(y){
        return x * y
    }
    return times
}


// Create multiplier function

const double = makeMultiplier(2);

console.log(double);

console.log(double(5));
console.log(double(3));
console.log(double(4));
console.log(double(10));
console.log(double(7));



const triple = makeMultiplier(3);

console.log(triple);

console.log(triple(5));
console.log(triple(3));
console.log(triple(4));
console.log(triple(10));
console.log(triple(7));

