const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const patientSchema = new Schema({
			first_name:{type: String, required: true},
			last_name:{type:String, required: true},
			email:{type: String, required: false},
			sex:{type: String, required: true},
			age:{type:Number, required: false},
			chart:{type:String, length:60},
			medication:{type:String, lenght:60},
			allergies:{type:String, length:80},
			observations:{type:String, length: 60},
			schedule:[{ type: Schema.Types.ObjectId, ref: 'Schedule' }],

});

const Patient = mongoose.model("Patient", patientSchema);

module.exports = Patient;