var solveMeFirst = function(a, b){
    const sum = a + b;
    return sum
}

var multiply = function(a, b){
    const mul= a * b;
    return mul
}

var evenOrOdd = function (number) {

    let type = "";

    if(number % 2 === 0){
        type = "Even"
    }else{
        type = "Odd";
    }

    return type
};

// console.log(solveMeFirst(2, 3));
// console.log(multiply(4, 5));
// console.log(evenOrOdd(7));