const fs = require("fs");
const chalk = require("chalk");

const addOrder = (myOrder) => {
  const allOrders = loadOrders();
  allOrders.push({ reminder: myOrder });
  console.log(
    chalk.green(`
  Added new order: ${myOrder}
  `)
  );
  saveOrders(allOrders);
};

const loadOrders = () => {
  try {
    const dataBuffer = fs.readFileSync("utils/functions.json");
    const functionsJson = dataBuffer.toString();
    return JSON.parse(functionsJson);
  } catch (error) {
    return [];
  }
};

const saveOrders = (allOrders) => {
  const functionsJson = JSON.stringify(allOrders);
  fs.writeFileSync("utils/functions.json", functionsJson);
};

const listOrders = () => {
  const allOrders = loadOrders();
  allOrders.map((order, index) => {
    console.log(`${index + 1}. ${order.reminder}`);
  });
};

const orderComplete = (orderToDelete) => {
  const allOrders = loadOrders();

  try {
    const removedItem = allOrders.splice(orderToDelete - 1, 1);
    console.log(`
    Successfully removed ${removedItem[0].reminder}
    `);
  } catch (error) {
    console.log("Number out of range");
  }

  saveOrders(allOrders);
};

module.exports = {
  addOrder,
  listOrders,
  orderComplete,
};