var dbConn  = require('../../config/db.config');

var adminlogins = function(adminlogins){
    this.adminlogin_username     =   adminlogins.adminlogin_username;
    this.adminlogin_password     =   adminlogins.adminlogin_password;
   
}

// get all adminlogins
adminlogins.getAlladminlogins = (result) =>{
    dbConn.query('SELECT * FROM adminlogin', (err, res)=>{
        if(err){
            console.log('Error while fetching adminlogin', err);
            result(null,err);
        }else{
            console.log('admin logged in successfully');
            result(null,res);
        }
    })
}

// get adminlogin by ID from DB
adminlogins.getadminloginByID = (id, result)=>{
    dbConn.query('SELECT * FROM adminlogins WHERE cId=?', id, (err, res)=>{
        if(err){
            console.log('Error while fetching adminlogins by id', err);
            result(null, err);
        }else{
            result(null, res);
        }
    })
}

// create new adminloginy
adminlogins.createadminlogin = (adminloginReqData, result) =>{
    dbConn.query('INSERT INTO adminlogins SET ? ', adminloginReqData, (err, res)=>{
        if(err){
            console.log('Error while inserting adminlogin');
            result(null, err);
        }else{
            console.log('adminlogin created successfully');
            result(null, res)
        }
    })
}

// update adminlogin
adminlogins.updateadminlogin = (id, adminloginReqData, result)=>{
    dbConn.query("UPDATE adminlogins SET username=?,password=?", [adminloginReqData.username,adminloginReqData.password, id], (err, res)=>{
        if(err){
            console.log('Error while updating the adminlogin');
            result(null, err);
        }else{
            console.log("adminlogin updated successfully");
            result(null, res);
        }
    });
}

// delete adminlogin
adminlogins.deleteadminlogin = (id, result)=>{
    //is cid a foreign key??
    dbConn.query('DELETE FROM adminlogins WHERE cId=?', [id], (err, res)=>{
         if(err){
             console.log('Error while deleting the adminlogins');
             result(null, err);
         }else{
             result(null, res);
         }
     })
}

module.exports = adminlogins;