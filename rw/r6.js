import chalk from 'chalk';
import { questionInt } from 'readline-sync';
import { inputMatrix, printMatrix, addMatrices } from './5.js';

function main() {
    console.log(chalk.blue("*****************************"));
    console.log('\t\t MATRIX CLI \t\t');
    console.log(chalk.blue("*****************************"));

    console.log(`1. Press 1 to Perform Matrix Addition
2. Press 2 to Find Diagonals for a Matrix
3. Press 3 to Perform Matrix Multiplication
4. Press 4 to Find the Determinant of the Matrix
5. Press 5 to Multiply a Matrix with a Constant
6. Press 6 to Find the Transpose of a Matrix
0. Press 0 to Exit`);

    var option = questionInt("Enter the operation that you want to perform: ");

    switch (option) {
        case 0:
            console.log("Thank you for using our CLI. Bye!");
            //return
            break;
        case 1:
            var matrixA = inputMatrix();
            var matrixB = inputMatrix();
            var result = addMatrices(matrixA, matrixB);
            console.log("The sum of the given matrices is: ");
            printMatrix(result);
            break;
        default:
            console.log("Invalid option. Please enter a valid option.");
            break;
    }
}

main();
