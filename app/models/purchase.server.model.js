/** Load the module dependencies
 * Created by James Smartt on 2/19/2017.
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// fixthis Define a new 'PurchaseSchema'
const PurchaseSchema = new Schema({

    created: {
        type: Date,
        default: Date.now
    }

});

// Create the 'Purchase' model out of the 'PurchaseSchema'
mongoose.model('Purchase', PurchaseSchema);