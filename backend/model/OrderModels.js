const { model } = require("mongoose");

const { OrderSchemas } = require("../schemas/OrderSchemas");

const OrderModels = new model("order" , OrderSchemas);

module.exports = { OrderModels };