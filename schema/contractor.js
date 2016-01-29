var mongoose = require('mongoose');

var contractorSchema = new mongoose.Schema({
    name : String
  , portfolio : [String]
  , specialty : [String]
  , pastProjects : [PastProject]
  , serviceAreaZipCode : [Number]
  , phoneNumber : Number
  , email : String
  , isActive : Boolean
  , startDate : Date
  , endDate : Date
});

var PastProject = new mongoose.Schema({
    category : {
        type : String,
        enum : ['EMER,'RENO']}
  , tags : [String]
  , price : Number
});

// Compile a 'Contractor' model using the contractorSchema as the structure.
// Mongoose also creates a MongoDB collection called 'Contractor' for these documents.
var Contractor = mongoose.model('Contractor', contractorSchema);

module.exports = Contractor;
