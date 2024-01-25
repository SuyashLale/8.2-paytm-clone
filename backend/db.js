const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://admin:0dRKEPho2zpLeyzl@cluster0.qw1buq3.mongodb.net/paytm-clone"
);

const userSchema = mongoose.Schema({
  username: String,
  firstName: String,
  lastName: String,
  password: String,
});

// Mongoose automatically looks for the plural, lowercased version of the model name,
// in this case, "users"
const User = mongoose.model("User", userSchema);

module.exports = {
  User,
};
