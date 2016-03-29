var mongoose = require('mongoose');


var providerSchema = {
  name: {
    type: String,
    required:true
  },
  address:{
    type: String,
    required: true
  },
  telephone:{
    type: Number,
    required: true
  },
  mail: {
    type:String,
    required: true
  },
  type:{
    type: String,
  },
};

module.exports = new mongoose.Schema(providerSchema);
module.exports.providerSchema = providerSchema ;
