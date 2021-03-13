const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var bcrypt = require("bcryptjs");

const userSchema = new Schema({

    username:{type:String, required:true},
    password:{type:String,required:true},
    email: {type:String, required:true},
    schedules:[{ type: Schema.Types.ObjectId, ref: 'Schedule' }],
    date:{type:Date, default: () => new Date(new Date() + 7*24*60*60*1000)}
});

userSchema.pre('validate', function(next) {
    
  this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(10), null);
  console.log(this.password);
  next();
});

const User = mongoose.model("User", userSchema);


User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };

  




module.exports = User;