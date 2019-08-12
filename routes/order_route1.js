var order=require('../models/order_model');
var express=require('express');
var router=express.Router();

router.get('/',function(req,res,next){
    order.getDoneOrder(function(err,rows){
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
    });
});

router.put('/:status',function(req,res,next){
    order.updateStatus(req.params.status,req.body,function(err,rows){
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
    });
});

module.exports=router;