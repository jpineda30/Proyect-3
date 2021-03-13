const {Schedule} = require("../models");

module.exports = {
    findSchedulesById:function (q){
        console.log(q);
        //console.log(res);
        // console.log(req.params);
         return Schedule.find(q);
        // // .sort({date})
        //  .then(dbModel => res.json(dbModel))
        //  .catch(err=> res.status(422).json(err));
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