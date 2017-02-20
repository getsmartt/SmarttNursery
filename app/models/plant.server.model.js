// Load the module dependencies
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// fixthis Define a new 'PlantSchema'
const PlantSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    }

});

// Create the 'Plant' model out of the 'PlantSchema'
mongoose.model('Plant', PlantSchema);