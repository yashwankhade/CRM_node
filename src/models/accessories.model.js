var dbConn  = require('../../config/db.config');

var accessoriess = function(accessoriess){
    this.accessories_Empployee_Id    =   accessoriess.accessories_Empployee_Id;
    this.accessories_Accessories_name  =   accessoriess.accessories_Accessories_name;
    this.accessories_Quantity   =   accessoriess.accessories_Quantity;
    this.accessories_Status  =   accessoriess.accessories_Status;
}

// get all accessoriess
accessoriess.getAllaccessoriess = (result) =>{
    dbConn.query('SELECT * FROM accessories', (err, res)=>{
        if(err){
            console.log('Error while fetching accessoriess', err);
            result(null,err);
        }else{
            console.log('accessoriess fetched successfully');
            result(null,res);
        }
    })
}

// get accessories by ID from DB
accessoriess.getaccessoriesByID = (id, result)=>{
    dbConn.query('SELECT * FROM accessoriess WHERE cId=?', id, (err, res)=>{
        if(err){
            console.log('Error while fetching accessoriess by id', err);
            result(null, err);
        }else{
            result(null, res);
        }
    })
}

// create new accessories
accessoriess.createaccessories = (accessoriesReqData, result) =>{
    dbConn.query('INSERT INTO accessoriess SET ? ', accessoriesReqData, (err, res)=>{
        if(err){
            console.log('Error while inserting data');
            result(null, err);
        }else{
            console.log('accessories created successfully');
            result(null, res)
        }
    })
}

// update accessories
accessoriess.updateaccessories = (id, accessoriesReqData, result)=>{
    dbConn.query("UPDATE accessories SET accessories_Empployee_Id=?,accessories_Accessories_name=?,accessories_Quantity=?,accessories_Status=? WHERE cId = ?", [accessoriesReqData.accessories_Empployee_Id,accessoriesReqData.accessories_Accessories_name,accessoriesReqData.accessories_Quantity,accessoriesReqData.accessories_Status, id], (err, res)=>{
        if(err){
            console.log('Error while updating the accessories');
            result(null, err);
        }else{
            console.log("accessories updated successfully");
            result(null, res);
        }
    });
}

// delete accessories
accessoriess.deleteaccessories = (id, result)=>{
    dbConn.query('DELETE FROM accessoriess WHERE cId=?', [id], (err, res)=>{
         if(err){
             console.log('Error while deleting the accessoriess');
             result(null, err);
         }else{
             result(null, res);
         }
     })
}

module.exports = accessoriess;