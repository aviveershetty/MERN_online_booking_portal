const mongoose = require("mongoose");

mongoose.set("debug", true);

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/Agasa", {
  useCreateIndex: true,
  useNewUrlParser: true
});

module.exports.User = require("./user");
module.exports.Order = require("./order");
