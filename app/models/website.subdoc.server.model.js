/** Load the module dependencies
 * Created by James Smartt on 2/20/2017.
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define a new 'WebsiteSchema'
const WebsiteSchema = new Schema({

    type: String,
    url: String

});

// Create the 'Website' model out of the 'WebsiteSchema'
mongoose.model('Website', WebsiteSchema);