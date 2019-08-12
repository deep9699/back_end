var db=require('../dbconnection');
var admin={
adminLogin(item,callback)
{
    return db.query("select * from admin_tbl where admin_id=? and admin_password=?",[item.admin_id,item.admin_password],callback);
},
allAdmin(callback)
{
    return db.query("select * from admin_tbl",callback);
}
}
module.exports=admin;