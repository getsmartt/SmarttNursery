/** Load the module dependencies
 * Created by James Smartt on 2/20/2017.
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//  Define a new 'ReviewSchema'
const ReviewSchema = new Schema({

    rating: Number,
    review: String

});

// Create the 'Review' model out of the 'ReviewSchema'
mongoose.model('Review', ReviewSchema);