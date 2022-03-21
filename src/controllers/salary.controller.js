
const salaryModel = require('../models/salary.model');

// get all salary list
exports.getsalarysList = (req, res)=> {
    //console.log('here all salary list');
    salaryModel.getAllsalarys((err, salarys) =>{
        console.log('We are here');
        if(err)
        res.send(err);
        console.log('salary', salarys);
        res.send(salarys)
    })
}

// get salary by ID
exports.getsalaryByID = (req, res)=>{
    //console.log('get salary by id');
    salaryModel.getsalaryByID(req.params.id, (err, salary)=>{
        if(err)
        res.send(err);
        console.log('single employee data',salary);
        res.send(salary);
    })
}


// create new salary
exports.createNewsalary = (req, res) =>{
    const salaryReqData = new salaryModel(req.body);
    console.log('salaryReqData', salaryReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        salaryModel.createsalary(salaryReqData, (err, salary)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'salary Created Successfully', data: salary.insertId})
        })
    }
}


// update salary
exports.updatesalary = (req, res)=>{
    const salaryReqData = new salaryModel(req.body);
    console.log('salaryReqData update', salaryReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        salaryModel.updatesalary(req.params.id, salaryReqData, (err, salary)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'salary updated Successfully'})
        })
    }
}


// delete salary
exports.deletesalary = (req, res)=>{
    salaryModel.deletesalary(req.params.id, (err, salary)=>{
        if(err)
        res.send(err);
        res.json({success:true, message: 'salary deleted successully!'});
    })
}