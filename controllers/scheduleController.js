const { Schedule } = require("../models");

module.exports = {
  findAppointment: function (q) {
    console.log(q);
    //console.log(res);
    // console.log(req.params);
    return Schedule.find({ day: q });
    // // .sort({date})
    //  .then(dbModel => res.json(dbModel))
    //  .catch(err=> res.status(422).json(err));
  },
  findAllAppointment: function (q) {
    console.log(q);
    //console.log(res);
    // console.log(req.params);
    return Schedule.find();
    // // .sort({date})
    //  .then(dbModel => res.json(dbModel))
    //  .catch(err=> res.status(422).json(err));
  },

  create: function (req, res) {
    console.log(req.body);
    let { start: startT, end: endT, day, patient, service } = req.body;

    Schedule.create({
      startT,
      endT,
      day,
      patient,
      service,
      //Here goes the schedule obj
      /*       day: props.day,
      patient: patient,
      service: service,
      start: startTime.current.value,
      end: endTime.current.value, */
    })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => {
        res.status(422).json(err);
      });
  },
};
