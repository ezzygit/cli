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
    "exit"] }];

    const moreDrinkOptions1 = [{ type: "list", name: "Espresso Drinks", message: "Please choose an option below", choices: [
        "Latte",
        "Mocha",
        "Macchiato",
        "Cappuccino",
        "Americano",
        "Espresso",
        "exit"] }];

        const moreDrinkOptions2 = [{ type: "list", name: "Brewed Coffee", message: "Please choose an option below", choices: [
            "Caffé Misto",
            "Freshly Brewed Coffee",
            "exit"] }];

            const moreDrinkOptions3 = [{ type: "list", name: "Iced Coffee & Cold Brew", message: "Please choose an option below", choices: [
                "Starbucks Doubleshot™ Iced Coffee",
                "Starbucks Doubleshot™ Vanilla Iced Coffee",
                "Cold Brew latte",
                "Cold Brew",
                "Nitro Latte",
                "Nitro Cappucino",
                "Nitro Cold Brew",
                "exit"] }];

                const moreDrinkOptions4 = [{ type: "list", name: "Hot Teavana™ Tea", message: "Please choose an option below", choices: [
                    "Teavana™ Brewed Tea",
                    "Freshly Brewed Coffee",
                    "exit"] }];

                    const moreDrinkOptions5 = [{ type: "list", name: "Iced Teavana™ Tea", message: "Please choose an option below", choices: [
                        "Teavana™ Shaken Iced Tea",
                        "Teavana™ Iced Tea Latte",
                        "Teavana™ Iced Tea Infusions",
                        "Teavana™ Frozen Iced Tea",
                        "exit"] }];

                        const moreDrinkOptions6 = [{ type: "list", name: "Smoothies", message: "Please choose an option below", choices: [
                            "Banana, Raspberry & Blueberry Smoothie 250 ML",
                            "Mango & Passionfruit Smoothie 250 ML",
                            "exit"] }];

                            const moreDrinkOptions7 = [{ type: "list", name: "Frappuccino® Blended Beverages", message: "Please choose an option below", choices: [
                                "Coffee Frappuccino",
                                "Cream Frappuccino",
                                "exit"] }];

                                const moreDrinkOptions8 = [{ type: "list", name: "Bottled Drinks", message: "Please choose an option below", choices: [
                                    "Waters",
                                    "Juices",
                                    "Innocent Bubbles",
                                    "exit"] }];

                                    const moreDrinkOptions9 = [{ type: "list", name: "Hot Chocolate", message: "Please choose an option below", choices: [
                                        "Hot Chocolate",
                                        "exit"] }];

    const removeQuestionDrinks = [
  { type: "input", name: "remove item", message: "What would you like to remove? Please type a number." },
];

const addQuestionFood = [{ type: "list", name: "food", message: "What would you like to eat?", choices: [
    "Baked Goods",
    "Hot Breakfast",
    "Lunch",
    "Fresh Fruit & Pots",
    "Snacks & Sweets"] }];

    const moreFoodOptions1 = [{ type: "list", name: "Baked Goods", message: "Please choose an option below", choices: [
        "Bagels & Bread",
        "Muffins & Scones",
        "Croissants",
        "Brownies, Bars & Cookies",
        "Cakes, Tarts & Pies",
        "exit"] }];

        const moreFoodOptions2 = [{ type: "list", name: "Hot Breakfast", message: "Please choose an option below", choices: [
            "Breakfast Sandwiches",
            "Butties & Sarnies",
            "Croissants",
            "Porridge",
            "exit"] }];

            const moreFoodOptions3 = [{ type: "list", name: "Lunch", message: "Please choose an option below", choices: [
                "Sandwiches",
                "Wraps",
                "Salads",
                "exit"] }];

                const moreFoodOptions4 = [{ type: "list", name: "Fresh Fruit & Pots", message: "Please choose an option below", choices: [
                    "Banana",
                    "Berry Crunch",
                    "Berry Bircher",
                    "exit"] }];

                    const moreFoodOptions5 = [{ type: "list", name: "Snacks and Sweets", message: "Please choose an option below", choices: [
                        "Crisps",
                        "Cookies",
                        "Chocolate",
                        "Bars & Nuts",
                        "exit"] }];
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