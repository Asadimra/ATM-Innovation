#! /usr/bin/env mode
import inquirer from "inquirer";
let my_balance = 2000;
let my_pin = 121;
let my_answer = await inquirer.prompt([
  {
    name: "pin",
    message: "Enter Your Pin: ",
    type: "number",
  },
]);

if (my_answer.pin === my_pin) {
  console.log("Access granted");
  let operationAns = await inquirer.prompt([
    {
      name: "operation",
      message: "Choose your option ",
      type: "list",
      choices: ["Deposit", "WithDrawal", "check_balance"],
    },
  ]);

    if (operationAns.operation === "WithDrawal"){
        let amountAns = await inquirer.prompt([{
            name: "Tamount",
            message:"Enter Your Amount: ",
            type: "number",
        }]);
    if (amountAns.Tamount>0  && amountAns.Tamount<my_balance){
      my_balance-=amountAns.Tamount;
      console.log("Your remaining balance is "+ my_balance);
    }
      else if(amountAns.Tamount>=my_balance){
          console.log("Insufficent Balance");
       }
       else  {console.log("PLZ enter positive number.");
       
       }
    }

       else if(operationAns.operation === "Deposit"){
        let amountAns = await inquirer.prompt([{
            name: "Tamount",
            message:"Enter Your Amount: ",
            type: "number",
        }]);
        my_balance+=amountAns.Tamount
        console.log("your current balance is: "+ my_balance);
       }
       else if (operationAns.operation === "check_balance"){
        console.log("your balance is:"+ my_balance);  
       }
    }
       else {
        console.log("Incorrect pin number!");
        }


  

