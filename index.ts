#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const pin:number= 3456;
const account:number = 10000;
const answer = await inquirer.prompt([{
    name: "pin",
    type: "number",
    message: "Enter your pin number"
}])


if(answer.pin === pin ){
    console.log(chalk.green("congratulation you login sucessfully"));
    const operation = await inquirer.prompt([{
        name: "acc",
        type :"list",
        message: "select one  option please",
        choices: ["withdraw", "balance check"]
  }])
   if(operation.acc === "withdraw"){
     let withdraw = await inquirer.prompt([{
        name: "att",
        type: 'list',
        message: "please select a value for withdraw",
        choices: [1000,3000,5000, 8000, 10000, 12000 ,15000]
     }])
     if(withdraw.att > 10000){
        console.log( chalk.red("you account balance is 10000 kindly enter a less than oR equal of  10000"))
     }
     else{
        console.log(chalk.green(withdraw.att + "  withdraw succesfully"))
     }
  }
    if(operation.acc ==="balance check"){
        console.log( chalk.green("your account balance is  "  +  account))
    }
}
else{
    console.log( chalk.red("please enter a valid pin"))
}
