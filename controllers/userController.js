const {User} = require("../models");

module.exports = {
    findAll:function (req,res){
        User.find()
        // .sort({date})
        .then(dbModel => send(dbModel))
        .catch(err=> res.status(422).json(err));
    },
    findById: function(req,res){
        User.findById(req.params.id)
        .then(dbModel=>res.json(dbModel))
        .catch(err=>res.status(422).json(err));
    },
    create: function(req,res){
        console.log("CREATION");
        console.log(req.body);
        User.create({
            username:req.body.username,
            password:req.body.password,
            email:req.body.email
        })
        .then(dbModel => res.json(dbModel))
        .catch((err)=>{res.status(422).json(err)});
    }
};