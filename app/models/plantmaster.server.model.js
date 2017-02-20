// Load the module dependencies
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//add references to subdocuments
const Reviews = require('./review.subdoc.server.model');
const Documents = require('./document.subdoc.server.model');
const Notes = require('./note.subdoc.server.model');

// Define a new 'PlantMasterSchema'
const PlantMasterSchema = new Schema({

    plantlistid: String,
    majorgroup: String,
    family: String,
    genushybridmarker: String,
    genus: String,
    specieshybridmarker: String,
    species: String,
    infraspecificrank: String,
    infraspecificepithet: String,
    // fixthis refactor Cultivar into subdocument
    cultivar: [{
        name: String,
        tradename: String,
        patentnumber: String,
        description: String,
        supplier: [{supplierid: String}],
        customer: [{customerid: String}],
        review: [Reviews],
        document: [Documents],
        note: [Notes]
    }],
    propagation:[{
        type: String,
        method: String,
        reference: String
    }],
    characteristic: [{
        type: String,
        value: String,
        reference: String
    }]
});

// Set the 'scientificname' virtual property fixthis so null values are ignored in name.
PlantMasterSchema.virtual('scientificname').get(function() {
    return this.genushybridmarker
        + ' ' + this.genus
        + ' ' + this.specieshybridmarker
        + ' ' + this.species
        + ' ' + this.infraspecificrank
        + ' ' + this.infraspecificepithet;
});

PlantMasterSchema.set('toJSON', { getters: true, virtuals: true });

// Create the 'Article' model out of the 'ArticleSchema'
mongoose.model('PlantMaster', PlantMasterSchema);

/** Steps to complete
 * fixthis build controllers.
 * fixthis build routes.
 * fixthis register routes in Express config file.
 */
