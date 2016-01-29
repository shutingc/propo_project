var mongoose = require('mongoose');

var quoteRequestSchema = new mongoose.Schema({
    projectId : Schema.Types.ObjectId
  , contractorIds : [Schema.Types.ObjectId]
  , isActive : Boolean
  , quoteDate : Date
});

// Compile a 'QuoteRequestDetail' model using the quoteRequestSchema as the structure.
// Mongoose also creates a MongoDB collection called 'QuoteRequestDetail' for these documents.
var QuoteRequest = mongoose.model('QuoteRequest', quoteRequestSchema);

module.exports = QuoteRequest;
