
const adminregisterModel = require('../models/adminregister.model');

// get all adminregister list
exports.getadminregistersList = (req, res)=> {
    //console.log('here all adminregister list Username, email, password');
    adminregisterModel.getAlladminregisters((err, adminregisters) =>{
        console.log('here is admin registration details');
        if(err)
        res.send(err);
        console.log('adminregister', adminregisters);
        res.send(adminregisters)
    })
}

// get adminregister by ID
exports.getadminregisterByID = (req, res)=>{
    //console.log('get admin by id');
    adminregisterModel.getadminregisterByID(req.params.id, (err, adminregister)=>{
        if(err)
        res.send(err);
        console.log('single admin data',adminregister);
        res.send(adminregister);
    })
}


// create new adminregister
exports.createNewadminregister = (req, res) =>{
    const adminregisterReqData = new adminregisterModel(req.body);
    console.log('adminregisterReqData', adminregisterReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        adminregisterModel.createadminregister(adminregisterReqData, (err, adminregister)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'adminregister Created Successfully', data: adminregister.insertId})
        })
    }
}


// update adminregister
exports.updateadminregister = (req, res)=>{
    const adminregisterReqData = new adminregisterModel(req.body);
    console.log('adminregisterReqData update', adminregisterReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        adminregisterModel.updateadminregister(req.params.id, adminregisterReqData, (err, adminregister)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'adminregister updated Successfully'})
        })
    }
}


// delete adminregister
exports.deleteadminregister = (req, res)=>{
    Model.deleteadminregister(req.params.id, (err, adminregister)=>{
        if(err)
        res.send(err);
        res.json({success:true, message: 'adminregister deleted successully!'});
    })
}