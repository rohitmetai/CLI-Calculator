#! usr/bin/env node    
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
async function delay(time) {
    return new Promise((res) => {
        setTimeout(res, time);
    });
}
async function welcome() {
    const welcomeMsg = chalkAnimation.rainbow("STARTING CALCULATOR", 10);
    await delay(3000);
    welcomeMsg.stop();
    CalcDisplay();
    calculator();
}
function CalcDisplay() {
    console.log(chalk.green(`-------------------------`));
    console.log(chalk.green(`|       CALCULATOR      |`));
    console.log(chalk.green(`-------------------------`));
    console.log(chalk.green(`| 9    |   8   |   7  + |`));
    console.log(chalk.green(`| 6    |   5   |   4  - |`));
    console.log(chalk.green(`| 3    |   2   |   1  * |`));
    console.log(chalk.green(`| 0    |   .   |  **  / |`));
    console.log(chalk.green(`-------------------------`));
    console.log(chalk.green(`| DEVLOP BY ROHIT KUMAR |`));
    console.log(chalk.green(`-------------------------`));
}
function calculator() {
    let operations = inquirer.prompt([{
            name: "firstNumber",
            type: "number",
            message: chalk.yellow("Enter First Number : ")
        },
        {
            name: "SecondNumber",
            type: "number",
            message: chalk.yellow("Enter Second Number : ")
        },
        {
            name: "operator",
            type: "list",
            choices: ["(+)Addition", "(-)Subtraction", "(*)Multiplication", "(/)Division", "(**)Exponent"],
            message: chalk.bgBlack.red("Which operation you would like to perform")
        }]).then((operations) => {
        if (operations.operator == "(+)Addition") {
            console.log("Addition Performed :" + operations.firstNumber + operations.SecondNumber);
        }
        else if (operations.operator == "(-)Subtraction") {
            console.log("Subtraction Performed :" + (operations.firstNumber - operations.SecondNumber));
        }
        else if (operations.operator == "(*)Multiplication") {
            console.log("Multiplication Performed :" + (operations.firstNumber * operations.SecondNumber));
        }
        else if (operations.operator == "(/)Division") {
            console.log("Subtraction Performed :" + (operations.firstNumber / operations.SecondNumber));
        }
        else if (operations.operator == "(**)Exponent") {
            console.log("Exponent Performed :" + (operations.firstNumber ** operations.SecondNumber));
        }
        else {
            console.log('Choose Valid Operator');
            calculator();
        }
    });
}
welcome();
//calculator
