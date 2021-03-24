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
        )
        .then(dbModel => res.json(dbModel))
        .catch((err)=>{res.status(422).json(err)});
    }
};