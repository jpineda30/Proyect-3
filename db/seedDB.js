const mongoose = require("moongose");
const db = require("../models");

//Gets us the doctorMongoDB
mongoose.connect(
	process.env.MONGODB_URI || "mongodb://localhost/doctorDB"
);

const doctorSeed =[
	{
		doctor:{
			user:{
				username:"theDoc",
				password:"vibraAlto",
				email:"mail@mail.com"
			},
			patients:[{

				first_name:"John"
				last_name:"Doe"
				email:"noemail@mail.com"
				sex:"M"
				age:23
				chart:"Headaches, Scratches"
				medication:"Paracetamol"
				allergies:"None?"
				observations:"Should be scheduled for appointment"
			},{
				first_name:"Jane",
				last_name:"Doe",
				email:"jane@mail.com",
				sex:"F",
				age:32,
				chart:"No history",
				medication:"Paracetamol",
				allergies:"Bees",
				observations:"Keep in observation"
		}],
			schedule:{
				startT:"031520211500",
				endT:"031520211600",
				patient:"",
				service:
			},
			services:{
				name:
				price:
				details:
			}
		}
			}
]


{
	doctor:
		user:
			username:
			password:
			email:
		patients[]:
			patiend_id:
			first_name:
			last_name:
			email:
			sex:
			age:
			chart:
			medication:
			allergies:
			observations:
		schedule:
			startT:
			endT:
			patient:
			service:
			

	services:
		name:
		price:
		details:
}



{
	doctor:
	docID

		user:
		user_id
			username:
			password:
			email:
		schedule:
			startT:
			endT:
			patient:
			service:
			

	services:
		name:
		price:
		details:
}

{
	patients[]:
	patiend_id:
	first_name:
	last_name:
	email:
	sex:
	age:
	chart:
	medication:
	allergies:
	observations:
}