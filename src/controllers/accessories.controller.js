
const accessoriesModel = require('../models/accessories.model');

// get all accessories list accessories
exports.accessoriessList = (req, res)=> {
    //console.log('here all accessories list');
    accessoriesModel.getAllaccessoriess((err, accessoriess) =>{
        console.log('We are here');
        if(err)
        res.send(err);
        console.log('accessories', accessoriess);
        res.send(accessoriess)
    })
}

// get accessories by ID
exports.getaccessoriesByID = (req, res)=>{
    //console.log('get emp by id');
    accessoriesModel.getaccessoriesByID(req.params.id, (err, accessories)=>{
        if(err)
        res.send(err);
        console.log('single employee data',accessories);
        res.send(accessories);
    })
}


// create new accessories
exports.createNewaccessories = (req, res) =>{
    const accessoriesReqData = new accessoriesModel(req.body);
    console.log('accessoriesReqData', accessoriesReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        accessoriesModel.createaccessories(accessoriesReqData, (err, accessories)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'accessories Created Successfully', data: accessories.insertId})
        })
    }
}


// update accessories
exports.updateaccessories = (req, res)=>{
    const accessoriesReqData = new accessoriesModel(req.body);
    console.log('accessoriesReqData update', accessoriesReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        accessoriesModel.updateaccessories(req.params.id, accessoriesReqData, (err, accessories)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'accessories updated Successfully'})
        })
    }
}


// delete accessories
exports.deleteaccessories = (req, res)=>{
    accessoriesModel.deleteaccessories(req.params.id, (err, accessories)=>{
        if(err)
        res.send(err);
        res.json({success:true, message: 'accessories deleted successully!'});
    })
}