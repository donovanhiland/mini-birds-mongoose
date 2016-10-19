var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = new Schema({
  birds: {
    name: {
      type: String,
      lowercase: true,
      required: true
    },
    order: {
      type: String,
      maxlength: 20
    },
    status: {
      type: String,
      lowercase: true,
      enum: [
        "extinct",
        "near threatened",
        "least concern"
      ]
    }
  }
});
