#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1, //Base Currency
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280
};
let user_ans = await inquirer.prompt([
    {
        name: "from",
        type: "list",
        message: "Enter from Currency",
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']
    },
    {
        name: "to",
        type: "list",
        message: "Enter to Currency",
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']
    },
    {
        name: "amount",
        type: "number",
        message: 'Enter your Amount'
    }
]);
let fromAmount = currency[user_ans.from];
let toAmount = currency[user_ans.to];
let amount = user_ans.amount;
let baseAmount = amount / fromAmount; //  USD base currency
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount.toFixed(2));
