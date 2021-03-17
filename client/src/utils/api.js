import axios from "axios";

export default {
  // Gets all posts
  getUser: function() {
    return axios.get("/api/users");
  },
  // Gets the post with the given id
  createUser: function(username,password,email) {
    return axios.post("/api/users/", {
        username: username,
        password: password,
        email:email
      });
  },
  login: function(username,password){
    return axios.post("/api/users/login", {
        username: username,
        password: password
      });
  },
  isLogged: function(){
    return axios.get("/api/users/isLogged");
  }
};