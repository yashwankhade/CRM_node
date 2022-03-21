const express = require('express');
const router = express.Router();

const salarysController = require('../controllers/salary.controller');

// get all salary
router.get('/', salarysController.getsalarysList);

// get salary by ID
router.get('/:id',salarysController.getsalaryByID);

// create new salary
router.post('/', salarysController.createNewsalary);

// update salary
router.put('/:id', salarysController.updatesalary);

// delete salary
router.delete('/:id',salarysController.deletesalary);

module.exports = router;