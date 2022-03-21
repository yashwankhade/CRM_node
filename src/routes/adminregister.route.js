const express = require('express');
const router = express.Router();

const adminregistersController = require('../controllers/adminregister.controller');

// get all adminregister
router.get('/', adminregistersController.getadminregistersList);

// get adminregister by ID
router.get('/:id',adminregistersController.getadminregisterByID);

// create new adminregister
router.post('/', adminregistersController.createNewadminregister);

// update adminregister
router.put('/:id', adminregistersController.updateadminregister);

// delete adminregister
router.delete('/:id',adminregistersController.deleteadminregister);

module.exports = router;