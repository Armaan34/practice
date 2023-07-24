var matrix = [
    [1, 2, 3],
    [2, 4, 8],
    [10, 20, 30],
];
function printMatrix(matrix) {
    for (var i = 0; i < matrix.length; i++) {
        var str = "";
        for (var j = 0; j < matrix[i].length; j++) {
            str = str + matrix[i][j] + " ";
        }
        console.log(str);
    }
}

export default printMatrix
