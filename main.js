#!/usr/bin/env node

const lib = require("./lib");

if (process.argv.length <= 3) {
console.log("Insufficient parameter!");
process.exit(1);
}

let command = process.argv[2];
let numbers = process.argv
    .slice(3, process.argv.length)
    .map((n) => parseFloat(n));

if (numbers.some((n) => isNaN(n))) {
    console.log("Some arguments are not numbers!");
    process.exit(1);
}

let result;
switch (command) {
    case "sum":
        result = lib.sum(numbers);
        console.log(result);
        break;
    case "avg":
        result = lib.avg(numbers);
        console.log(result);
        break;
    case "max":
        result = lib.max(numbers);
        console.log(result);
        break;
    case "med":
        result = lib.med(numbers);
        console.log(result);
        break;
    case "iqr":
        result = lib.iqr(numbers);
        console.log(result);
        break;
    case "outlier":
        result = lib.outlier(numbers);
        if (result.length != 0){
            for(let i = 0; i < result.length; i++){
                console.log(result[i]);
            }
        }
        break;
    default:
        console.log("Wrong command!");
        process.exit(1);
}

