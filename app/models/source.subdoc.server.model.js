/** Load the module dependencies
 * Created by James Smartt on 2/20/2017.
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define a new 'SourceSchema'
const SourceSchema = new Schema({

    type: String,
    purchase: { type: Schema.Types.ObjectId, ref: 'Purchase' },
    planting: { type: Schema.Types.ObjectId, ref: 'Planting' },
    harvest: { type: Schema.Types.ObjectId, ref: 'Harvest' }
});

// Create the 'Source' model out of the 'SourceSchema'
mongoose.model('Source', SourceSchema);