const mongoose = require("mongoose");
const productSchema = require("../models/modelProduct");
const serviceSchema = require("../models/modelService");

let db = {};

  initialize();

  async function initialize() {
    //const { host, port, databaseName } = config.dbmongo;
    await mongoose.connect("mongodb://" + "localhost" + ":" + "27017" + "/" + "hackatonPrevi_FBages");
    console.log("Conectat a la base de dades de MongoDB");

    db.products = mongoose.model("products", productSchema);
    db.services = mongoose.model("services", serviceSchema);
  }

  module.exports = db;
  