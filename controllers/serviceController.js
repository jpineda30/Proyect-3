const {Service} = require("../models");

module.exports = {
    findAll: function() {
         return Service.find({})
      },
    findServiceById:function (q){
        console.log(q);
        //console.log(res);
        // console.log(req.params);
         return Service.find(q);
        // // .sort({date})
        //  .then(dbModel => res.json(dbModel))
        //  .catch(err=> res.status(422).json(err));
    },
    // findAll: function(req,res){
        
    //     //This should findall
    //     console.log(req.body);
    //     Service.find({}).then(dbModel => res.json(dbModel))
    //     .catch((err)=>{res.status(422).json(err)});
    // },
    create: function(req,res){
        Service.create({
            name:req.body.name,
            price:req.body.price,
            details:req.body.details
        })
        .then(dbModel => res.json(dbModel))
        .catch((err)=>{res.status(422).json(err)});
    }
};