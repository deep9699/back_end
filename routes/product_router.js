var product = require("../models/product_model");
var express = require("express");
var router = express.Router();

router.get('/:id?', function (req, res, next) {

    if (req.params.id) {
        product.getProductById(req.params.id,function(err,rows){
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
    }
    else {

        product.getAllProduct(function (err, rows) {
            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }
        });
    }

});

router.post('/',function(req,res,next){
    product.addProduct(req.body,function(err,rows){
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
    product.updateProduct(req.body,function(err,rows){
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
module.exports = router;