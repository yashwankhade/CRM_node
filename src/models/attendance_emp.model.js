var dbConn  = require('../../config/db.config');

var attendance_emp = function(attendance_employee){
    this.employee_id     =   attendance_employee.Company_Id;
    this.attendance_id  =   attendance_employee.attendance_id;
    this.date  =   attendance_employee.date;
    this.attendance  =   attendance_employee.attendance;
    
}

// get all salarys
attendance_emp.getEmployeeAttendance = (result) =>{
    dbConn.query('SELECT * FROM attendance_table1', (err, res)=>{

        if(err){
            console.log('Error while fetching attendance', err);
            result(null,err);
        }else{
            console.log('Attendance results found!');
            result(null,res);
        }
    })
}

// get salary by ID from DB
attendance_emp.getAttendanceByID = (id, result)=>{
    dbConn.query('SELECT * FROM attendance_table1 WHERE employee_id=?', id, (err, res)=>{
        if(err){
            console.log('Error while fetching attendance by id', err);
            result(null, err);
        }else{
            result(null, res);
        }
    })
}

// create new salary
attendance_emp.createNewAttendance = (attendanceReqData, result) =>{
    dbConn.query('INSERT INTO attendance_table1 SET ? ', attendanceReqData, (err, res)=>{
        if(err){
            console.log('Error while creating new attendance record!');
            result(null, err);
        }else{
            console.log('attendance record created successfully');
            result(null, res)
        }
    })
}

// update salary
attendance_emp.updateAttendance = (id, attendanceReqData, result)=>{
    dbConn.query("UPDATE attendance_table1 SET employee_id=?, attendance_id=?, date=?, attendance=? where employee_id=?", [attendanceReqData.employee_id, attendanceReqData.attendance_id,attendanceReqData.date, attendanceReqData.attendance, id], (err, res)=>{
        if(err){
            console.log('Error while updating the attendance');
            result(null, err);
        }else{
            console.log("attendance updated successfully");
            result(null, res);
        }
    });
}

// delete salary
attendance_emp.deleteAttendance = (id, result)=>{
    dbConn.query('DELETE FROM attendance_table1 WHERE employee_id=?', [id], (err, res)=>{
         if(err){
             console.log('Error while deleting the attendance');
             result(null, err);
         }else{
             result(null, res);
         }
     })
}

module.exports = attendance_emp;