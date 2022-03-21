const express = require('express');
const router = express.Router();

const attendanceController = require('../controllers/attendance_emp.controller');

// get attendance
router.get('/', attendanceController.getEmployeeAttendance);

// get attendance by ID
router.get('/:id',attendanceController.getAttendanceByID);

// create new attendance record
router.post('/', attendanceController.createNewAttendance);

// update salary
router.put('/:id', attendanceController.updateAttendance);

// delete salary
router.delete('/:id',attendanceController.deleteAttendance);

module.exports = router;