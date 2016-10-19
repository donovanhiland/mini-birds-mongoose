var mongoose = require('mongoose');
var Schema = mongoose.Schema;

  var birdSchema = new Schema({
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

  var userSchema = new Schema({
    email: String,
    username: {
      type: String,
      required: true
    },
    level: Number,
    location: String,
    member: Boolean
  });

  module.exports = mongoose.model("User", userSchema);

  var sightingsSchema = new Schema({
    user: [{
      type: String,
      ref: "User"
    }],
    birds: [birdSchema],
    confirmed: {
      type: Boolean,
      default: false
    },
    numberSeen: {
      type: Number,
      min: 1
    }
  });

module.exports = mongoose.model('Sighting', sightingSchema);
