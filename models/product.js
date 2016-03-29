var mongoose = require('mongoose');
var provider = require('./proveedor.js');

var productSchema = {
  reference: { type: String, require: true },
  name:{  type: String, require: true },
  line:{  type: String },
  type:{ type: String, require: true },
  pictures[{
    type: String, required: true, match: /^http:\/\//i
  }],
  price:{ type: Number, require: true },
  discount:{ type: Number },
  location:{ type: String, require: true },
  unitMin:{ type: String },
  unitMax:{ type: String },
  quantity:{ type: String },
  provider: provider.providerSchema
}

module.exports = new mongoose.Schema(productSchema);
module.exports.productSchema = productSchema ;
