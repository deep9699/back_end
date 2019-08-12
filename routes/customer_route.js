var customer=require('../models/customer_model');
var express=require('express');
var router=express.Router();

router.get('/:id?',function(req,res,next){
    
    if(req.params.id)
    {
        customer.getCustomerById(req.params.id,function(err,rows){
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
    customer.getAllCustomer(function(err,rows){
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
});

router.post('/',function(req,res,next){
    customer.getCustomerByLogin(req.body,function(err,rows){
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

router.put('/',function(req,res,next){
    customer.updateCustomer(req.body,function(err,rows){
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
