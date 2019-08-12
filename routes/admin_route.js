var admin=require('../models/admin_model');
var express=require('express');
var router=express.Router();

router.post('/',function(req,res,next){
    admin.adminLogin(req.body,function(err,rows){
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

router.get('/',function(req,res,next){
    admin.allAdmin(function(err,rows){
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

module.exports=router