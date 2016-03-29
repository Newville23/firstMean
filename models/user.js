var mongoose = require('mongoose');

var userSchema ={
  profile:{
    user_id:{ type: String, required: true },
    username:{type: String, required: true, lowercase: true},
    picture: {type: String, required: true, match: /^http:\/\//i},
    password: {type: String, require: true}
  }
}

module.exports = new mongoose.Schema(userSchema);
module.exports.userSchema = userSchema;
