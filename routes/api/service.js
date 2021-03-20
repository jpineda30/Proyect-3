var passport = require("../../config/passport.js");
const {Service} = require("../../controllers/index");
const router = require("express").Router();

router.route("/create")
.post(Service.create)

router.route("/").get(
    function(req,res){
        ///Do qe need to check the user is logged?
        console.log("checking user is logged");
        if(!req.user){
            res.status(418).json({"message":"You're not logged..."});
        } else {
            //Regresar la respuesta
            Service.findAll().then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));;
        }
    })

module.exports = router;