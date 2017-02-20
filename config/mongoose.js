// Load the module dependencies
const config = require('./config');
const mongoose = require('mongoose');

// Define the Mongoose configuration method
module.exports = function() {
	// Use Mongoose to connect to MongoDB
	const db = mongoose.connect(config.db);

	// Load the models
	require('../app/models/user.server.model');
	require('../app/models/article.server.model');
	require('../app/models/plantmaster.server.model');

    // Load plugins
    mongoose.plugin(require('../app/models/commonfield.plugin.server.model.js'));
    // fixthis add plugin for reviews
    // fixthis add plugin for documents
    // fixthis add plugin for notes

	// Return the Mongoose connection instance
	return db;
};


