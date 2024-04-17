var prompt = require('prompt-sync')();
var fs = require('fs');
var os = require('os');
var _ = require('lodash');

const pi = 3.14;

// function calculateCircleArea(radius){
//     return Math.PI * radius ** 2;
// }

// var calculateCircleArea = function(radius){
//     return Math.PI * radius ** 2;
// }

var calculateCircleArea = (radius)=>{
    return pi*Math.pow(radius,2);
}

var radius = prompt("Enter the value of radius = ");
var ans = calculateCircleArea(radius);
console.log(ans);



(()=>{
console.log("Hi this is UnNamed function")
})();


function callback(){
    console.log("This is callback function!!");
}

var fun1 = (a,b,cb)=>{
    console.log(`Sum is ${a+b}`);
    cb();
}

fun1(12,13,callback);


var cb = (a,b)=>{
    console.log("Addition is: ", a+b);
    console.log("Multiplication is: ", a*b);
}

var performOperation = (a,b,cb)=>{
    cb(a,b);
}

performOperation(10,10,cb);


fs.readFile('greeting.txt', 'utf8', function(err, data){

    // Display the file content if not present than Print error
    if (err) {
        console.error(err);
        return;
      }
      console.log(data);
});


var memory = os.totalmem()/1024/1024;
console.log("Total memory available: ", memory);

var freemomory = os.freemem();
console.log("Total free memory available: ", freemomory);


var osplateform = os.platform();
console.log("Operating system platform: ", osplateform);


console.log("Number of CPU Cores:", os.cpus().length);

// var cpu = os.cpus();
// console.log(" Number of CPU cores: ", cpu);


var arr = [1,2,3,4,5,6,7,8,9,10];

//  num ==>   The function invoked per iteration.
var evenNums = _.filter(arr, num => num%2 === 0);

var sum = _.sumBy(evenNums);
console.log("Sum is : ", sum);

function sumOfEvenNumbers(numbers) {
    const evenNumbers = _.filter(numbers, num => num % 2 === 0);
    console.log("Even Numbers array: ",evenNumbers);
    return _.sumBy(evenNumbers);
    }

console.log("SUM IS: ",sumOfEvenNumbers(arr));

