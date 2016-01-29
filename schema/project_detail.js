var mongoose = require('mongoose');

var projectDetailSchema = new mongoose.Schema({
    projectId : Schema.Types.ObjectId
  , contractorIds : [Schema.Types.ObjectId]
  , isActive : Boolean
  , startDate : Date
  , endDate : Date
  , userComments : String
  , questionAnswer : [Questionnaire]
});

var Questionnaire = new mongoose.Schema({
    questions : String
  , answer : String
});

// Compile a 'ProjectDetail' model using the projectDetailSchema as the structure.
// Mongoose also creates a MongoDB collection called 'ProjectDetail' for these documents.
var ProjectDetail = mongoose.model('ProjectDetail', projectDetailSchema);

module.exports = ProjectDetail;
