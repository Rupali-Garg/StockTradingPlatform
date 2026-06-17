const { model } = require("mongoose");

const { HoldingSchemas } = require("../schemas/HoldingSchemas");

const HoldingModels = new model("holding" , HoldingSchemas);

module.exports = { HoldingModels };