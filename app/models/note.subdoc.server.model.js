/** Load the module dependencies
 * Created by James Smartt on 2/20/2017.
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//  Define a new 'NoteSchema'
const NoteSchema = new Schema({

    note: String

});

// Create the 'Note' model out of the 'NoteSchema'
mongoose.model('Note', NoteSchema);