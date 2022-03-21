const express = require('express');
const router = express.Router();

const adminloginsController = require('../controllers/adminlogin.controller');

// get all adminlogin
router.get('/', adminloginsController.getadminloginsList);

// get adminlogin by ID
router.get('/:id',adminloginsController.getadminloginByID);

// create new adminlogin
router.post('/', adminloginsController.createNewadminlogin);

// update adminlogin
router.put('/:id', adminloginsController.updateadminlogin);

// delete adminlogin
router.delete('/:id',adminloginsController.deleteadminlogin);

module.exports = router;