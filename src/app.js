const figlet = require("figlet");
const inquirer = require("inquirer");
const chalk = require("chalk");

const { addOrder, listOrders, orderComplete } = require("../utils/functions.js");

const topLevelQuestion = [
  { type: "list", name: "options", message: "What would you like to order?", choices: ["drinks", "food", "list order", "remove", "exit"] },
];

const addQuestionDrinks = [{ type: "list", name: "drinks", message: "What would you like to drink?", choices: [
    "Espresso Drinks",
    "Brewed Coffee",
    "Iced Coffee & Cold Brew",
    "Hot Teavana™ Tea",
    "Iced Teavana™ Tea",
    "Smoothies",
    "Frappuccino® Blended Beverages",
    "Bottled Drinks",
    "Hot Chocolates",
    "Other Drinks"] }];

   const removeQuestionDrinks = [
  { type: "input", name: "remove item", message: "What would you like to remove? Please type a number." },
];

const addQuestionFood = [{ type: "list", name: "food", message: "What would you like to eat?", choices: [
    "Baked Goods",
    "Hot Breakfast",
    "Lunch",
    "Fresh Fruit & Pots",
    "Snacks & Sweets"] }];

   const removeQuestionFood = [
   { type: "input", name: "remove item", message: "What would you like to remove? Please type a number." },
];


const main = () => {
  console.log(chalk.red(figlet.textSync("SpiceBux App", { font: "alligator" })));
  app();
};

const app = async () => {
  const answers = await inquirer.prompt(topLevelQuestion);
  if (answers.options == "drinks") {
    const answer = await inquirer.prompt(addQuestionDrinks);
    addOrder(answer.drinks);
    app();
} else if (answers.options == "food") {
    const answer = await inquirer.prompt(addQuestionFood);
    addOrder(answer.food);
    app();
} else if (answers.options == "list order") {
    listOrders();
    app();
  } else if (answers.options == "remove") {
    listOrders();
    const answer = await inquirer.prompt(removeQuestionDrinks, removeQuestionFood);
    orderComplete(answer.remove);
    app();
  } else if (answers.options == "exit") {
    console.log("Come again soon!");
  }
};



main();