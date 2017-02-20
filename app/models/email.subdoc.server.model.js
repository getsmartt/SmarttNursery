/** Load the module dependencies
 * Created by James Smartt on 2/20/2017.
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define a new 'EmailSchema'
const EmailSchema = new Schema({

    type: String,
    email: String

});

// Create the 'Email' model out of the 'EmailSchema'
mongoose.model('Email', EmailSchema);