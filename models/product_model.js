var db=require('../dbconnection');
var product={
    getAllProduct(callback)
    {
        return db.query("select * from product_tbl",callback);
    },
    getProductById(id,callback)
    {
        return db.query("select * from product_tbl where p_id=?",[id],callback);
    },
    getProductByCatId(c_id,p_id,callback)
    {
        return db.query("select * from product_tbl where fk_cat_id=? and p_id NOT IN (?)",[c_id,p_id],callback);
    },
    getProductByCatName(cat_name,callback)
    {
        return db.query("select c.*,p.* from category_tbl c,product_tbl p where p.fk_cat_id=c.cat_id and c.cat_name=?",[cat_name],callback);
    },
    getLowQuantityProduct(callback)
    {
        return db.query("select * from product_tbl where p_qty<=10",callback);
    },
    addProduct(item,callback)
    {
        return db.query("insert into product_tbl values(?,?,?,?,?,?,?,?,?)",[item.p_id,item.p_name,item.p_price,item.p_qty,item.p_mfg,item.p_img,item.p_color,item.fk_cat_id,item.p_desc],callback);
    },
    updateProduct(item,callback)
    {
        return db.query("update product_tbl set p_price=?,p_qty=?,p_mfg=?,p_color=? where p_id=?",[item.p_price,item.p_qty,item.p_mfg,item.p_color,item.p_id],callback);
    }
}
module.exports=product;