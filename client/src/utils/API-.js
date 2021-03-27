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
};
