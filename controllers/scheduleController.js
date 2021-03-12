const {Schedule} = require("../models");

module.exports = {
    findAll:function (req,res){
        Schedule.find(req.query)
        // .sort({date})
        .then(dbModel => res.json(dbModel))
        .catch(err=> res.status(422).json(err));
    },
    findById: function(req,res){
        Schedule.findById(req.params.id)
        .then(dbModel=>res.json(dbModel))
        .catch(err=>res.status(422).json(err));
    },
    create: function(req,res){
        console.log(req.body);
        Schedule.create({
          //Here goes the schedule obj
        })
        .then(dbModel => res.json(dbModel))
        .catch((err)=>{res.status(422).json(err)});
    }
};