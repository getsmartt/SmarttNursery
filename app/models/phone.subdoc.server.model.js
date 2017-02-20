/** Load the module dependencies
 * Created by James Smartt on 2/20/2017.
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define a new 'PhoneSchema'
const PhoneSchema = new Schema({

    type: String,
    phone: String

});

// Create the 'Phone' model out of the 'PhoneSchema'
mongoose.model('Phone', PhoneSchema);