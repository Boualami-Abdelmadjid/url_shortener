const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const domainSchema = new Schema({
    user: {
        type: Schema.ObjectId
    },
    original: {
      type: String,
      required: true,
    },
    short: {
      type: String,
      required: true,
    }})
  
module.exports = mongoose.model("Domain", domainSchema);