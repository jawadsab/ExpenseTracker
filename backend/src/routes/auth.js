const express = require('express');
const router = express.Router();
const { signup, getUserById, signin, auth } = require('../controllers/auth');

router.param('userId', getUserById);
router.post('/signup', signup);
router.post('/signin', signin);

module.exports = router;
