import { questionInt } from "readline-sync";

function printMatrix(matrix) {
    if (!matrix) {
        console.log("Wrong values for matrix, try again.");
        return;
    }
    for (var i = 0; i < matrix.length; i++) {
        var str = "";
        for (var j = 0; j < matrix[i].length; j++) {
            str = str + matrix[i][j] + "\t";
        }
        console.log(str);
    }
}

function inputMatrix() {
    var rows = questionInt("Enter the number of rows: ");
    var cols = questionInt("Enter the number of cols: ");

    var matrix = new Array(rows);
    for (var i = 0; i < rows; i++) {
        matrix[i] = new Array(cols);
        for (var j = 0; j < cols; j++) {
            matrix[i][j] = questionInt(`Please enter element of ${i} ${j}: `);
        }
    }
    return matrix;
}

function addMatrices(matrixA, matrixB) {
    if (
        matrixA.length !== matrixB.length ||
        matrixA[0].length !== matrixB[0].length
    ) {
        console.log("wrong dimensions, cannot be added");
        return null;
    }

    var matrixC = new Array(matrixA.length);
    for (var i = 0; i < matrixA.length; i++) {
        matrixC[i] = new Array(matrixA[0].length);
        for (var j = 0; j < matrixA[0].length; j++) {
            matrixC[i][j] = matrixA[i][j] + matrixB[i][j];
        }
    }
    return matrixC;
}

var matrixA = inputMatrix();
console.log("Matrix A:");
printMatrix(matrixA);

var matrixB = inputMatrix();
console.log("Matrix B:");
printMatrix(matrixB);

var matrixC = addMatrices(matrixA, matrixB);
console.log("Matrix C (Sum of A and B):");
printMatrix(matrixC);

export { printMatrix, inputMatrix, addMatrices }