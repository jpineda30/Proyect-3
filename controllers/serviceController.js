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
        ).catch((err)=>{res.status(422).json(err)});
    },
    update: function(q, u,o){
        Service.updateOne(q,u,o)
        .catch((err)=>{status= err});
    }
};