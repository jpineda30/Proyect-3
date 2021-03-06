const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const scheduleSchema = new Schema({
    startT:{dataType:Number, required:true},
    endT:{dataType:Number, required:true},
    patient:[{ ype: Schema.Types.ObjectId, ref: 'Patient' }],
    service:[{ type: Schema.Types.ObjectId, ref: 'Service' }]
});