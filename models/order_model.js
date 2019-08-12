var db=require('../dbconnection');
var order={

    buyProduct(qty,item,callback)
    {
        return db.query("update product_tbl set p_qty=? where p_id=?",[qty,item.p_id],callback);
    },

    addOrder(item,callback)
    {   
        
        console.log(item);
        return db.query("insert into order_tbl values(?,?,?,?,?,?,?)",[item.id,item.amount,item.fk_email_id,item.fk_cat_id,item.fk_p_id,item.date,item.status],callback)
    },

    getPendingOrder(callback)
    {
        return db.query("select * from order_tbl where status=0",callback);
    },
    // getAllOrder(callback)
    // {
    //     return db.query("select * from order_tbl ",callback);
    // },

    getDoneOrder(callback)
    {
          return db.query("select * from order_tbl where status=1",callback);
    },
    getCancelOrder(callback)
    {
        return db.query("select * from order_tbl where status>1",callback);
    },
    getOrderBypid(id,callback)
    {
        return db.query("select * from order_tbl where fk_email_id=?",[id],callback);
    },

    updateStatus(status,item,callback)
    {
        return db.query("update order_tbl set status=? where id=?",[status,item.id],callback);
    }
    

}
module.exports=order;