// Write a function that takes an array of numbers and outputs the average of all the numbers

function average(numbers){ 
    let sum = 0;
    for (let i = 0; i < numbers.length; i++){
        sum += numbers[i];
    }
    let average = sum/numbers.length;
    return average;
}

console.log(average([1,4,7]))