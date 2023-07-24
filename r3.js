// import readLineSync from "readline-sync"

import { questionInt } from "radline-sync";

function printMatrix(matrix) {
    for (var i = 0; i < matrix.length; i++) {
        var str = "";
        for (var j = 0; j < matrix[i].length; j++) {
            str = str + matrix[i][j] + " ";
        }
        console.log(str);
    }
}

function createMatrix(rows, columns) {
    var matrix = [];
    for (var i = 0; i < rows; i++) {
        var row = [];
        for (var j = 0; j < columns; j++) {
            var value = readlineSync.question("Enter the value for matrix[${i}][${j}]: ");
            row.push(value);
        }
        matrix.push(row);
    }
    return matrix;
}

function main() {
    var rows = readlineSync.questionInt("Enter the number of rows: ");
    var columns = readlineSync.questionInt("Enter the number of columns: ");

    var matrix = createMatrix(rows, columns);

    console.log("Your Matrix:");
    printMatrix(matrix);
}