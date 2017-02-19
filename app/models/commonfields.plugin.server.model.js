// Load the module dependencies
const mongoose = require('mongoose');
const lastUpdated =  require('./lastUpdated.server.model');

module.exports = exports = function commonFieldsPlugin (schema, options) {
  schema.add({
      createdBy: {
        type: Schema.ObjectId,
        ref: 'User'
      },

      dateCreated: {
        type: Date,
        default: Date.now
      },

      isPrivate: {
        type: Boolean,
        default: true
      },

      deleted: {
        type: Boolean,
        default: false
      },

      locked: {
        type: Boolean,
        default: true
      },

      lastUpdate: [lastUpdated]

    })

}
