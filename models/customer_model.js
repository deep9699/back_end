var db=require('../dbconnection');
var customer={
    getAllCustomer(callback){
        return db.query("select * from customer_tbl",callback);
    },
    getCustomerByLogin(item,callback){
        return db.query("select * from customer_tbl where email_id=? and password=?",[item.email_id,item.password],callback);
    },
    getCustomerById(id,callback){
        return db.query("select * from customer_tbl where email_id=?",[id],callback);
    },
    insertCustomer(item,callback){
        return db.query("insert into customer_tbl values(?,?,?,?,?,?,?,?)",[item.email_id,item.password,item.name,item.age,item.mobile_no,item.city,item.gender,item.address],callback);
    },
    updateCustomer(item,callback){
        return db.query("update customer_tbl set name=?,age=?,mobile_no=?,city=?,address=? where email_id=?",[item.name,item.age,item.mobile_no,item.city,item.address,item.email_id],callback);
    },
    updateCustomerPassword(item,callback){
        return db.query("update customer_tbl set password=? where email_id=?",[item.password,item.email_id],callback);
    }

}
module.exports=customer;