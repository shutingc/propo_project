var mongoose = require('mongoose');

var quoteReplySchema = new mongoose.Schema({
    projectId : Schema.Types.ObjectId
  , contractorIds : [Schema.Types.ObjectId]
  , isActive : Boolean
  , replyDate : Date
  , price : Number
  , comment : String
});

// Compile a 'QuoteReplyDetail' model using the quoteReplySchema as the structure.
// Mongoose also creates a MongoDB collection called 'QuoteReplyDetail' for these documents.
var QuoteReply = mongoose.model('QuoteReply', quoteReplySchema);

module.exports = QuoteReply;
