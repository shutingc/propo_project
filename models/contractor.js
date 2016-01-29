var mongoose = require('mongoose');

var contractorSchema = new mongoose.Schema({
    name : String
  , rating : String
  , phoneNumber: Number
  , isActive: Boolean
});

// Compile a 'Contractor' model using the contractorSchema as the structure.
// Mongoose also creates a MongoDB collection called 'Contractor' for these documents.
var Contractor = mongoose.model('Contractor', contractorSchema);

module.exports = Contractor;
