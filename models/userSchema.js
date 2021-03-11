const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var bcrypt = require("bcryptjs");

const userSchema = new Schema({

    username:{type:String, required:true},
    password:{type:String,required:true},
    email: {type:String, required:true},
    date:{type:Date, default: () => new Date(new Date() + 7*24*60*60*1000)}
});


userSchema.pre("save", function(user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
});


const User = mongoose.model("User", userSchema);


User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };



module.exports = User;