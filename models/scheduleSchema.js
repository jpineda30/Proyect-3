const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const scheduleSchema = new Schema({
  startT: { type: String, required: true },
  endT: { type: String, required: true },
  day: { type: String, required: true },
  patient: { type: Schema.Types.ObjectId, ref: "Patient" },
  doctor: { type: Schema.Types.ObjectId, ref: "User" },
  service: [{ type: Schema.Types.ObjectId, ref: "Service" }],
  cost: { type: Number },
});

const Schedule = mongoose.model("Schedule", scheduleSchema);

module.exports = Schedule;
