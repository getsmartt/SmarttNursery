/** Load the module dependencies
 * Created by James Smartt on 2/20/2017.
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// fixthis Define a new 'SupplySchema'
const SupplySchema = new Schema({

    created: {
        type: Date,
        default: Date.now
    }

});

// Create the 'Supply' model out of the 'SupplySchema'
mongoose.model('Supply', SupplySchema);

/** Steps to complete
 * fixthis register model in Mongoose config file.
 * fixthis build controllers.
 * fixthis build routes.
 * fixthis register routes in Express config file.
 */