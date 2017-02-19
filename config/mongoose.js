// Load the module dependencies
const config = require('./config');
const mongoose = require('mongoose');

// Define the Mongoose configuration method
module.exports = function() {
	// Use Mongoose to connect to MongoDB
	const db = mongoose.connect(config.db);

	// Load the models
	require('../app/models/lastupdated.server.model');
	require('../app/models/user.server.model');
	require('../app/models/article.server.model');
	require('../app/models/plantmaster.server.model');

	// Return the Mongoose connection instance
	return db;

	mongoose.plugin(require('..app/models/commonfields.plugin.server.model'));
	// add plugin for rfeviews
	// add plugin for documents
	// add plugin for notes

};
