import chalk from "chalk";
import { questionInt, question } from "readline-sync";

// Import the defined functions
import { inputMatrix, printMatrix, addMatrices , diagonalMatrix , constMultiply} from "./operations.js";

function main(){
    console.log(chalk.green("*************************************************"));
    console.log('\t\t MATRIX CLI \t\t');
    console.log(chalk.green("*************************************************"));

    console.log(`\t1. Press 1 to Perform Matrix Addition\n
    2. Press 2 to Find Diagonals for a Matrix\n
    3. Press 3 to perform Matrix Multiplication\n
    4. Press 4 to find the determinant of the Matrix\n
    5. Press 5 to multiply a matrix with a constant\n
    6. Press 6 to find the transpose of a matrix\n
    0. Press 0 to exit`);

    var option = questionInt("Enter the operation you want to perform : ")

    switch(option){
        case 0:
            console.log("Thank you for using our CLI. BYE!");
            return
            
        case 1: 
            var matrixA = inputMatrix()
            var matrixB = inputMatrix()
            var result = addMatrices(matrixA , matrixB)
            console.log("The sum of given matrices is : ");
            printMatrix(result)
            break;
        case 2:
            var matrixA = inputMatrix()
            diagonalMatrix(matrixA)
            // console.log("The logic to perform diagonal operation will go here");
            break;
        case 3:
            console.log("Matrix Multiplication");
            break;
        case 4:
            console.log("Determinant of matrix");
            break;
        case 5: 
            var n = questionInt("Enter the constant to multiply : ")
            var matrixA = inputMatrix()
            var result = constMultiply(matrixA , n)
            printMatrix(result)
            break;
        case 6: 
            console.log("transpose of matrix");
            break;
        default:
            console.log("Invalid input");
            break;
        }       

        var willContinue = question("Do you want to continue? (Y/N)")
        if(willContinue == "y" || willContinue == "Y" || willContinue == "yes" || willContinue == "Yes"){
            main()
        } else{
            console.log(chalk.bgGreenBright("Thank you for using our application for matrices, see you again!"));
        }
}

main()

/* 
TODO tasks
1. write a function highlightDiag() which will print the matrix but with highlighted diagonal
    highlight the diagonal in red and the rest of the elements in blue
    
2. clear the terminal after every operation
*/