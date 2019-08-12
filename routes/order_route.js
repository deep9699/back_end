var order=require('../models/order_model');
var express=require('express');
var router=express.Router();

router.put('/:qty?',function(req,res,next){
        
    order.buyProduct(req.params.qty,req.body,function(err,rows){
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
router.post('/',function(req,res,next){
    
    order.addOrder(req.body,function(err,rows){
        
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

router.get('/:id?',function(req,res,next){
    if(req.params.id)
    {
        order.getOrderBypid(req.params.id,function(err,rows){
            if(err)
            {
                res.json(err);
            }
            else
            {
                res.json(rows);
            }
        });
    }
    else
    {
        order.getPendingOrder(function(err,rows){
        if(err)
        {
            req.json(err);
        }
        else
        {
            res.json(rows);
        }
    });
    }
});
module.exports=router;