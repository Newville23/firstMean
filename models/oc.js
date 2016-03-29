var mongoose = require('mongoose');
var product = require('./product.js');


var ocSchema = {
  reference:{
    type: String, require: true
  },
  user_id:{ type: String, default: "David Villanueva" },
  item:[{
    product: product.productSchema,
    quantity: {type: Number, default: 1, min: 1, require: true},
  }],
  total: {type:Number, require:true},
  iva: {type: Number, require: true},
  date: {type: Date, require: true}
}

module.exports = new mongoose.Schema(ocSchema);
module.exports.ocSchema = ocSchema ;
