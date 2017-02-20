/** Load the module dependencies
 * Created by James Smartt on 2/20/2017.
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//  Define a new 'AddressSchema'
const AddressSchema = new Schema({

    type: String,
    address1: String,
    address2: String,
    city: String,
    state: String,
    zipcode: String,
    country: String

});

// Create the 'Address' model out of the 'AddressSchema'
mongoose.model('Address', AddressSchema);