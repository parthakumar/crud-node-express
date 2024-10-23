const express = require('express')
const UserController = require('../controllers/user')
const router = express.Router();
router.post('/create', UserController.create);
router.get('/findAll', UserController.findAll);
router.get('/findOne/:id', UserController.findOne);
router.patch('/update/:id', UserController.update);
router.delete('/destroy/:id', UserController.destroy);

module.exports = router;