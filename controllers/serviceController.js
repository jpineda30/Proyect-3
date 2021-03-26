const {Service} = require("../models");

module.exports = {
    findServiceById:function (q){
        console.log(q);
        //console.log(res);
        // console.log(req.params);
         return Service.find(q);
        // // .sort({date})
        //  .then(dbModel => res.json(dbModel))
        //  .catch(err=> res.status(422).json(err));
    },
    create: function(req,res){
        Service.create(
          //Here goes the schedule obj
          {
                name:req.body.name,
                price:req.body.price,
                details:req.body.details
          }
        ).then(serviceCreated => {res.status(202).json(serviceCreated)})
        .catch((err)=>{res.status(422).json(err)});
    },
    update: function(req,res){
        if(!req.user){
            res.status(404).json({message:"Not logged in."})
          } else{
        Service.updateOne(
            {_id:req.body._id},{
              $set:{name:req.body.name, price:req.body.price, details:req.body.details}
            },{
              upsert:false,
            })
        .then((serviceUpdated) => {res.status(202).json(serviceUpdated)})
        .catch((err)=>{status= err});
          }
    }
};