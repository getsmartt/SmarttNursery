// Load the module dependencies
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define a new 'Schema'
const LastUpdatedSchema = new Schema({
    dateUpdated: {
        type: Date,
        default: Date.now
    },
      updatedBy: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    oldValues: String,
    newValues: String
});

// Create the '' model out of the 'ArticleSchema'
mongoose.model('LastUpdated', LastUpdatedSchema);
