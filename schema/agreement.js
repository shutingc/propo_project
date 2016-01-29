var mongoose = require('mongoose');

var agreementSchema = new mongoose.Schema({
    projectId : Schema.Types.ObjectId
  , contractorId : Schema.Types.ObjectId
  , contractPrice : Number
  , miscInfo : String
  , startDate : Date
  , endDate : Date
  , address : String
  , parties : [String]
});

// Compile a 'Agreement' model using the agreementSchema as the structure.
// Mongoose also creates a MongoDB collection called 'Agreement' for these documents.
var Agreement = mongoose.model('Agreement', agreementSchema);

module.exports = Agreement;
