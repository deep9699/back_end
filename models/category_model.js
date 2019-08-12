var db=require('../dbconnection');
var category={
    getAllCategory(callback)
    {
        return db.query("select * from category_tbl",callback);
    },
    addCategory(item,callback)
    {
        return db.query("insert into category_tbl values(?,?)",[item.cat_id,item.cat_name],callback);
    }
}
module.exports=category;