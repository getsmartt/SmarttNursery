/** Load the module dependencies
 * Created by james_000 on 2/19/2017.
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//add references to subdocuments
const Reviews = require('./review.subdoc.server.model');
const Documents = require('./document.subdoc.server.model');
const Notes = require('./note.subdoc.server.model');
const Address = require('./address.subdoc.server.model');
const Email = require('./email.subdoc.server.model');
const WebSite = require('./website.subdoc.server.model');
const Phone = require('./phone.subdoc.server.model');

// Define a new 'SupplierSchema'
const SupplierSchema = new Schema({

    name: String,
    contact : [{ type: Schema.Types.ObjectId, ref: 'Contact' }],
    supply : [{ type: Schema.Types.ObjectId, ref: 'Supply' }],
    plant : [{ type: Schema.Types.ObjectId, ref: 'PlantMaster' }],
    email: [Email],
    phone: [Phone],
    address: [Address],
    website: [WebSite],
    review: [Reviews],
    document: [Documents],
    note: [Notes]

});

// Create the 'Supplier' model out of the 'SupplierSchema'
mongoose.model('Supplier', SupplierSchema);

/** Steps to complete
 * fixthis build controllers.
 * fixthis build routes.
 * fixthis register routes in Express config file.
 */
