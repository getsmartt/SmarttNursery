/** Load the module dependencies
 * Created by James Smartt on 2/20/2017.
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define a new 'DocumentSchema'
const DocumentSchema = new Schema({

    title: String,
    type: String,
    format: String,
    path: String

});

// Create the 'Document' model out of the 'DocumentSchema'
mongoose.model('Document', DocumentSchema);

