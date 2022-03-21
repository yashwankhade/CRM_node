//accessories
const express = require('express');
const router = express.Router();

const accessoriessController = require('../controllers/accessories.controller');

// get all accessories
router.get('/', accessoriessController.accessoriessList);

// get accessories by ID
router.get('/:id',accessoriessController.getaccessoriesByID);

// create new accessories
router.post('/', accessoriessController.createNewaccessories);

// update accessories
router.put('/:id', accessoriessController.updateaccessories);

// delete accessories
router.delete('/:id',accessoriessController.deleteaccessories);

module.exports = router;