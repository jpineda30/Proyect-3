const {User} = require("../models");

module.exports = {
    findAll:function (req,res){
        User.find(req.query)
        // .sort({date})
        .then(dbModel => res.json(dbModel))
        .catch(err=> res.status(422).json(err));
    },
    findById: function(req,res){
        User.findById(req.params.id)
        .then(dbModel=>res.json(dbModel))
        .catch(err=>res.status(422).json(err));
    },
    create: function(req,res){
        User.create(req.body)
        .then(dbModel=>(res.json))
        .catch((err)=>{res.status(422).json(err)});
    }
};