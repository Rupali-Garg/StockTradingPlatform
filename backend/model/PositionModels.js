const { model } = require("mongoose");

const { PositionSchemas } = require("../schemas/PositionSchemas");

const PositionModels = new model("position" , PositionSchemas);

module.exports = { PositionModels };