
const adminloginModel = require('../models/adminlogin.model');

// get all adminlogin list
exports.getadminloginsList = (req, res)=> {
    //console.log('here all adminlogin list');
    adminloginModel.getAlladminlogins((err, adminlogins) =>{
        console.log('here is admins username and password');
        if(err)
        res.send(err);
        console.log('adminlogin', adminlogins);
        res.send(adminlogins)
    })
}

// get adminlogin by ID
exports.getadminloginByID = (req, res)=>{
    //console.log('get emp by id');
    adminloginModel.getadminloginByID(req.params.id, (err, adminlogin)=>{
        if(err)
        res.send(err);
        console.log('single adminlogin data',adminlogin);
        res.send(adminlogin);
    })
}


// create new adminlogin
exports.createNewadminlogin = (req, res) =>{
    const adminloginReqData = new adminloginModel(req.body);
    console.log('adminloginReqData', adminloginReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        adminloginModel.createadminlogin(adminloginReqData, (err, adminlogin)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'adminlogin Created Successfully', data: adminlogin.insertId})
        })
    }
}


// update adminlogin
exports.updateadminlogin = (req, res)=>{
    const adminloginReqData = new adminloginModel(req.body);
    console.log('adminloginReqData update', adminloginReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        adminloginModel.updateadminlogin(req.params.id, adminloginReqData, (err, adminlogin)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'adminlogin updated Successfully'})
        })
    }
}


// delete adminlogin
exports.deleteadminlogin = (req, res)=>{
    adminloginModel.deleteadminlogin(req.params.id, (err, adminlogin)=>{
        if(err)
        res.send(err);
        res.json({success:true, message: 'adminlogin deleted successully!'});
    })
}