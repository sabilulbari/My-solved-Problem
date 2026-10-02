// Problem Node. 01
var solveMeFirst = function(a, b){
    const sum = a + b;
    return sum
}

// Problem Node. 02
var multiply = function(a, b){
    const mul= a * b;
    return mul
}

// Problem Node. 03
var evenOrOdd = function (number) {

    let type = "";

    if(number % 2 === 0){
        type = "Even"
    }else{
        type = "Odd";
    }

    return type
};


// Problem Node. 04
var makeNegative = function (number) {

   return number > 0 ? -number : number
};

var opposite = function (number) {

    const ops = number * -1;
    return ops
};


// console.log(solveMeFirst(2, 3));
// console.log(multiply(4, 5));
// console.log(evenOrOdd(7));
// console.log(makeNegative(-0));
console.log(opposite(10000));