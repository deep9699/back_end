var product = require("../models/product_model");
var express = require("express");
var router = express.Router();

router.get('/:c_id/:p_id',function(req,res,next){
    product .getProductByCatId(req.params.c_id,req.params.p_id,function(err,rows){
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

router.get('/:cat_name',function(req,res,next){
    product.getProductByCatName(req.params.cat_name,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

module.exports=router;