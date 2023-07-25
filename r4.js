import printMatrix from "./2.js";
import inputMatrix from "./3.js";

var matrixA = inputMatrix();
printMatrix(matrixA);

var matrixB = inputMatrix();
printMatrix(matrixB);

function addMatrices(matrixA, matrixB) {
    if (
        matrixA.length !== matrixB.length ||
        matrixA[0].length !== matrixB[0].length
    ) {
        console.log("wrong dimensions, cannot be added");
        return null;
    }

var matrixC = new Array(matrixA.legnth);
for (var i =0; i < matrixA.length; i++){
    matrixC[i] = new Array(matrixA[0].length);
    for (var j = 0; j< martixA[0].length; j++) {
        matrixC[i][j] = matrixA[i][j] + matrixB[i][j]
    }
}
return matrixC;
}

var matrixC = addMatrices(matrixA, matrixB);
printMatrix(matrixC);