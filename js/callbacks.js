// console.log('Callbacks!!!!!!!!!')

/*
    JavaScript Callbacks
*/

function filter(anArray){
    let output = [];
    for (let element of anArray){
        if (element % 2 !== 0){ // Logic that determines if num is odd
            output.push(element);
        };
    };
    return output;
}

let numbers = [5, 10, 15, 20, 25, 30];
console.log(filter(numbers));


// Create a function to filter out based on any true condition from a function

function filterWithCallback(anArr, callbackFn){
    let output = [];
    for (let element of anArr){
        if (callbackFn(element)){ // Logic that determines if element should be filtered
            output.push(element);
        };
    };
    return output;
}

function isEven(num){
    return num % 2 === 0
}

console.log(filterWithCallback(numbers, isEven));

function cName(name){
    return name[0].toUpperCase() === 'C'
}


console.log(filterWithCallback(['Chicago', 'Boston', 'Chattanooga', 'Charlotte', 'Nashville'], cName));


// isEven and cName are considered callback functions (because they are functions passed into another function as an argument to be executed later)
// filterWithCallback is considered a higher-order function (because it accepts a function as an argument)


// Often you will see callback function written right into argument
console.log(filterWithCallback(numbers, function(num){
    return num % 10 === 0;
}))

// More so with arrow functions
console.log(filterWithCallback(numbers, num => num % 10 === 0))
