const express = require('express');
const router = express.Router();
const messagesController = require('../controllers/messages');

/* GET home page. */
router.get('/', messagesController.getAll);
router.get('/:id', messagesController.getId);

module.exports = router;
