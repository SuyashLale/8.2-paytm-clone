const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://admin:0dRKEPho2zpLeyzl@cluster0.qw1buq3.mongodb.net/paytm-clone"
);

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    minLength: 3,
    maxLength: 30,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
    maxLength: 50,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    maxLength: 50,
  },
});

// Mongoose automatically looks for the plural, lowercased version of the model name,
// in this case, "users"
const User = mongoose.model("User", userSchema);

module.exports = {
  User,
};
