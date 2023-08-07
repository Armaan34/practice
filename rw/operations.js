import chalk from "chalk";
import { questionInt } from "readline-sync";
// import chalk, use your creativity for chalk

function printMatrix(matrix) {
  if (!matrix) {
    console.log("wrong matrix value to be printed");
    return;
  }
  for (var i = 0; i < matrix.length; i++) {
    var str = "";
    for (var j = 0; j < matrix[i].length; j++) {
      str = str + matrix[i][j] + " \t";
    }
    console.log(str);
  }
}

function addMatrices(matrixA, matrixB) {
  if (
    matrixA.length !== matrixB.length ||
    matrixA[0].length !== matrixB[0].length
  ) {
    console.log(
      "Your matrices have different dimensions, they can't be added, please try again"
    );
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

function inputMatrix() {
  var rows = questionInt("Enter the number of rows : ");
  var cols = questionInt("Enter the number of cols : ");
  // TODO add validations for rows and cols input
  var matrix = new Array(rows);
  for (var i = 0; i < rows; i++) {
    matrix[i] = new Array(cols);
    for (var j = 0; j < cols; j++) {
      matrix[i][j] = questionInt(`Please enter element of ${i} ${j} : `);
    }
  }

  return matrix;
}

function diagonalMatrix(matrix) {
  if (!matrix) {
    console.log("wrong matrix value to be printed");
    return;
  }
  if (matrix.length !== matrix[0].length) {
    console.log("not a square matrix");
    return;
  }
  for (var i = 0; i < matrix.length; i++) {
    var str = "";
    for (var j = 0; j < matrix[i].length; j++) {
      if (i == j) {
        str += chalk.blue(matrix[i][j]) + " \t";
      } else {
        str += chalk.red(matrix[i][j]) + " \t";
      }
    }
    console.log(str);
  }
}

function constMultiply(matrix, n) {
  if (!matrix) {
    console.log("wrong matrix value to be printed");
    return;
  }
  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[i].length; j++) {
      matrix[i][j] =  matrix[i][j] * n
    }
  }
  return matrix;
}

export { inputMatrix, printMatrix, addMatrices, diagonalMatrix , constMultiply };

var a = 2;
a = a * 2;