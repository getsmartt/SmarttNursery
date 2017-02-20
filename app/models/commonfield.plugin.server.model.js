// Load the module dependencies
const mongoose = require('mongoose');

module.exports = exports = function commonFieldsPlugin (schema) {
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

      lastUpdate: [
          {
              dateUpdated: {
                  type: Date,
                  default: Date.now
              },
              updatedBy: {
                  type: Schema.ObjectId,
                  ref: 'User'
              },
              oldValues: String,
              newValues: String
          }
      ]

    })

};
