const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const usersSchema = new Schema({
  username: { type: String, required: true, trim: true, unique: true },
  email: { type: String, required: true, trim: true, unique: true, trim: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model("User", usersSchema);
