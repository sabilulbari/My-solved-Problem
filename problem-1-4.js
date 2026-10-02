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

// Problem Node. 05
var opposite = function (number) {

    const ops = number * -1;
    return ops
};

// Problem Node. 06
var simpleArraySum = function (arrs) {

    let arrSum = 0
    for(let arr of arrs){
        arrSum = arrSum + arr 
    }
    return arrSum;
};

// Problem Node. 07
var sleepIn = function (weekday, vacation) {
    if(weekday == true || vacation == false){
        return false
    }else{
        return true
    }
};

// Problem Node. 08
var monkeyTrouble = function (aSmile, bSmile) {
    if(aSmile === bSmile){
        return true
    }else{
        return false
    }
};



// console.log(solveMeFirst(2, 3));
// console.log(multiply(4, 5));
// console.log(evenOrOdd(7));
// console.log(makeNegative(-0));
// console.log(opposite(10000));

// console.log(simpleArraySum([1, 2, 3, 4]));
// console.log(sleepIn(false, false));
console.log(monkeyTrouble(true, true));