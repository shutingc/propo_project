var mongoose = require('mongoose');

var projectSchema = new mongoose.Schema({
    userId : {
        type : Number,
        required : true}
  , category : {
        type : String,
        enum : ['EMER,'RENO']}
  , tags : [String]
  , createdAt : { type : Date, default : Date.now }
  , budget : [DataRange]
  , zipCode : Number
  , phoneNumber : Number
  , isActive : Boolean
  , startDate : Date
  , endDate : Date
});

var DataRange = new mongoose.Schema({
    min : Number
  , max : Number
});

// Compile a 'Project' model using the projectSchema as the structure.
// Mongoose also creates a MongoDB collection called 'Project' for these documents.
var Project = mongoose.model('Project', projectSchema);

module.exports = Project;
