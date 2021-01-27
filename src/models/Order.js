const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
reminder: {
    type: String,
}
});

const Order = mongoose.model("Order", orderSchema);

module.exports = {
    Order,
};