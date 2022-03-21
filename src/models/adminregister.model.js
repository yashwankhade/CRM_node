var dbConn  = require('../../config/db.config');

var adminregisters = function(adminregisters){
    this.adminregister_username     =   adminregisters.username;
    this.adminregister_email    =    adminregisters.email;
    this.adminregister_password  =   adminregisters.password;
}

// get all adminregister
adminregisters.getAlladminregisters = (result) =>{
    dbConn.query('SELECT * FROM adminregister', (err, res)=>{
        if(err){
            console.log('Failed to register', err);
            result(null,err);
        }else{
            console.log('admin registered successfully');
            result(null,res);
        }
    })
}

// get adminregister by ID from DB
adminregisters.getadminregisterByID = (id, result)=>{
    dbConn.query('SELECT * FROM adminregister WHERE cId=?', id, (err, res)=>{
        if(err){
            console.log('Error while fetching adminregisters by id', err);
            result(null, err);
        }else{
            result(null, res);
        }
    })
}

// create new adminregister
adminregisters.createadminregister = (adminregisterReqData, result) =>{
    dbConn.query('INSERT INTO adminregisters SET ? ', adminregisterReqData, (err, res)=>{
        if(err){
            console.log('Error while inserting data');
            result(null, err);
        }else{
            console.log('adminregister created successfully');
            result(null, res)
        }
    })
}

// update adminregister
adminregisters.updateadminregister = (id, adminregisterReqData, result)=>{
    dbConn.query("UPDATE adminregisters SET adminregister_username=?,adminregister_email=?,adminregister_password=?,", [adminregisterReqData.adminregister_username,adminregisterReqData.adminregister_email,adminregisterReqData.adminregister_password, id], (err, res)=>{
        
        if(err){
            console.log('coulnt change the username or password');
            result(null, err);
        }else{
            console.log("adminregisters username and password updated successfully");
            result(null, res);
        }
    });
}

// delete adminregister
adminregisters.deleteadminregister = (id, result)=>{
    dbConn.query('DELETE FROM adminregisters WHERE cId=?', [id], (err, res)=>{
         if(err){
             console.log('admin couldnt SIGN OUT');
             result(null, err);
         }else{
             result(null, res);
         }
     })
}

module.exports = adminregisters;