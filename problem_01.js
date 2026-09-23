//Question No: 01
// Find two numbers in an array whose sum equals a target value.


const numAry= [2,7,9,4,5,32,30,-9]
const target = 34;

const arySum =(target, arr)=>{

    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] + arr[j] === target){
                return [arr[i], arr[j]];
            }
        }
    }
    return null

}

console.log(arySum(target, numAry));
