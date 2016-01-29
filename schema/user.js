var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    name : String
  , zipCode : Number
  , phoneNumber : Number
  , email : String
});

var PastProject = new mongoose.Schema({
    category : {
        type : String,
        enum : ['EMER,'RENO']}
  , tags : [String]
  , price : Number
});

// Compile a 'User' model using the userSchema as the structure.
// Mongoose also creates a MongoDB collection called 'User' for these documents.
var User = mongoose.model('User', userSchema);

module.exports = User;
