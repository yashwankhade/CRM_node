
const attendanceModel = require('../models/attendance_emp.model');

// get all salary list
exports.getEmployeeAttendance = (req, res)=> {
    //console.log('here all salary list');
    attendanceModel.getEmployeeAttendance((err, att) =>{
        console.log('We are here');
        if(err)
        res.send(err);
        console.log('Attendance', att);
        res.send(att)
    })
}

// get salary by ID
exports.getAttendanceByID = (req, res)=>{
    //console.log('get salary by id');
    attendanceModel.getAttendanceByID(req.params.id, (err, att)=>{
        if(err)
        res.send(err);
        console.log('Employee attendance',att);
        res.send(att);
    })
}


// create new salary
exports.createNewAttendance = (req, res) =>{
    const salaryReqData = new attendanceModel(req.body);
    console.log('salaryReqData', attendanceReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        attendanceModel.createNewAttendance(attendanceReqData, (err, att)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'attendance Created Successfully', data: attendance.insertId})
        })
    }
}


// update salary
exports.updateAttendance = (req, res)=>{
    const attendanceReqData = new attendanceModel(req.body);
    console.log('attendanceReqData update', attendanceReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        attendanceModel.updateAttendance(req.params.id, attendanceReqData, (err, att)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'attendance updated Successfully'})
        })
    }
}


// delete salary
exports.deleteAttendance = (req, res)=>{
    attendanceModel.deleteAttendance(req.params.id, (err, salary)=>{
        if(err)
        res.send(err);
        res.json({success:true, message: 'attendance deleted successully!'});
    })
}