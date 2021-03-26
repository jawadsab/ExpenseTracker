const express = require('express');
const router = express.Router();
const { signup, getUserById, signin, auth,getUserData } = require('../controllers/auth');

router.param('userId', getUserById);
router.post('/signup', signup);
router.post('/signin', signin);
router.get("/:userId",getUserData);
module.exports = router;
