/** Load the module dependencies
 * Created by james_000 on 2/19/2017.
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// fixthis Define a new 'SupplierSchema'
const SupplierSchema = new Schema({

    created: {
        type: Date,
        default: Date.now
    }

});

// Create the 'Supplier' model out of the 'SupplierSchema'
mongoose.model('Supplier', SupplierSchema);