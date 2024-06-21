#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 50000;
let myPin = 12345;
// PRINTING WELCOME MESSAGE
console.log("\n\tWelcome to code-with-areeba \n");
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your pin:"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("CONGRATULATIONS sucessufully login!");
    let operations = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Select your operation to perform",
            choices: ["Withdraw", "CheckBalance"]
        }
    ]);
    if (operations.operation === "CheckBalance") {
        console.log(`Your account Balance is ${myBalance}`);
    }
    else if (operations.operation === "Withdraw") {
        let userAnswer = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter your amount to withdraw:"
            }
        ]);
        if (userAnswer.amount > myBalance) {
            console.log("Insufficient Balance!");
        }
        else {
            myBalance -= userAnswer.amount;
            console.log(`Withdraw amount ${userAnswer.amount}`);
            console.log(`Your account balance is ${myBalance}`);
        }
    }
}
else {
    console.log("Your pin is incorrect! TRY AGAIN");
}
