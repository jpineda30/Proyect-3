const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({

    username:{type:String, required:true},
    email: {type:String, required:true},
    date:{type:Date, required: true, default: () => new Date(new Date() + 7*24*60*60*1000)}
});

const User = mongoose.model("User", userSchema);

module.exports = User;