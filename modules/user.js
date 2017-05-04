var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var gemSchema = new Schema ({
  name: {type: String, unique: true },
  gem_type: String,
  est_val: Number,
  rare: Boolean,
  date_collected: {type: Date, default: Date.now}
});//end of var gem Schema


var Gem = mongoose.models('gems', gemSchema);

module.exports = Gem;
