import axios from "axios";

export default {
  // Gets all posts
  getUser: function() {
    return axios.get("/api/users");
  },
  // Gets the post with the given id
  createUser: function(username,password,email) {
    return axios.post("/api/users/signup", {

      username:username,password,email

      });
  },
  login:function(username,password){
    return axios.post("/api/users/login", {
        username: username,
        password: password
      });
  },
  isLogged: function(){
    return axios.get("/api/users/isLogged");
  },




  ///////////////
  ////Services///
  /////////////

  getServices: function () {
    return axios.get("/api/service");
  },

  createService: function (body) {
    console.log("THISISASERVICECREATION");
    console.log(body);
    return axios.post("api/service/create", {
      name:body.name,
      price:body.price,
      details:body.details
    })
  }



};