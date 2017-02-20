/** Load the module dependencies
 * Created by James Smartt on 2/20/2017.
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define subdocuments

const Source = require('./source.subdoc.server.model');

//  Define a new 'ItemDetailSchema'
const ItemDetailSchema = new Schema({

    plantid: {type: Schema.Types.ObjectId, ref: 'PlantMaster' },
    cost: Number,
    count: Number,
    format: String,
    source: [Source]
});

// Create the 'ItemDetail' model out of the 'ItemDetailSchema'
mongoose.model('ItemDetail', ItemDetailSchema);