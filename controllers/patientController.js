const { Patient } = require("../models");

module.exports = {
  findPatientById: function (q) {
    return Patient.find(q);
  },
  create: function (req, res) {
    Patient.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      phone_number: req.body.phone_number,
      sex: req.body.sex,
      age: req.body.age,
      chart: req.body.chart,
      medication: req.body.medication,
      allergies: req.body.allergies,
      observations: req.body.observations,
    })
      .then((patientCreated) => {
        res.status(202).json(patientCreated);
      })
      .catch((err) => {
        res.status(422).json(err);
      });
  },
  update: function (req, res) {
    if (!req.user) {
      res.status(200).json({ message: "Not logged in." });
    } else {
      Patient.updateOne(
        { _id: req.body._id },
        {
          $set: {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            phone_number: req.body.phone_number,
            sex: req.body.sex,
            age: req.body.age,
            chart: req.body.chart,
            medication: req.body.medication,
            allergies: req.body.allergies,
            observations: req.body.observations,
          },
        },
        {
          upsert: false,
        }
      )
        .then((patientUpdated) => {
          res.status(202).json(patientUpdated);
        })
        .catch((err) => {
          status = err;
        });
    }
  },
  delete: function (req, res) {
    if (!req.user) {
      res.status(200).json({ message: "Not logged in." });
    } else {
      Patient.deleteOne({ _id: req.body._id })
        .then((patientDeleted) => {
          res.status(202).json({ message: "Success" });
        })
        .catch((err) => {
          throw err;
        });
    }
  },
};
