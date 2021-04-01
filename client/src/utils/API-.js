import axios from "axios";

export default {
  // Gets all posts
  getUser: function () {
    return axios.get("/api/users");
  },
  // Gets the post with the given id
  createUser: function (username, password, email) {
    return axios.post("/api/users/signup", {
      username: username,
      password,
      email,
    });
  },
  login: function (username, password) {
    return axios.post("/api/users/login", {
      username: username,
      password: password,
    });
  },
  isLogged: function () {
    return axios.get("/api/users/isLogged");
  },

  ///////////////
  ////Services///
  /////////////

  getServices: function () {
    return axios.get("/api/service");
  },

  createService: function (body) {
    return axios.post("api/service/create", {
      name: body.name,
      price: body.price,
      details: body.details,
    });
  },

  updateService: function (body) {
    console.log(body);

    return axios.post("api/service/update", {
      _id: body._id,
      name: body.name,
      price: body.price,
      details: body.details,
    });
  },

  deleteService: function (body) {
    return axios.post("api/service/delete", {
      _id: body,
    });
  },

  ///////////////
  ////PATIENTS///
  /////////////

  getPatients: function () {
    return axios.get("/api/patient");
  },

  createPatient: function (body) {
    return axios.post("api/patient/create", {
      first_name: body.first_name,
      last_name: body.last_name,
      email: body.email,
      phone_number: body.phone_number,
      sex: body.sex,
      age: body.age,
      chart: body.chart,
      medication: body.medication,
      allergies: body.allergies,
      observations: body.observations,
    });
  },

  updatePatient: function (body) {
    console.log(body);

    return axios.post("api/patient/update", {
      _id: body._id,
      first_name: body.first_name,
      last_name: body.last_name,
      email: body.email,
      phone_number: body.phone_number,
      sex: body.sex,
      age: body.age,
      chart: body.chart,
      medication: body.medication,
      allergies: body.allergies,
      observations: body.observations,
    });
  },

  deletePatient: function (body) {
    return axios.post("api/patient/delete", {
      _id: body,
    });
  },

  createAppointment: function (body) {
    return axios.post("api/appointment/create", {});
  },
};
