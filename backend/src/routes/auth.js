const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const {
  signup,
  getUserById,
  signin,
  auth,
  getUserData,
} = require('../controllers/auth');

router.param('userId', getUserById);
router.post(
  '/signup',
  [
    check('username', 'Username is reuiqred').not().isEmpty(),
    check('email', 'Please include a valid email address').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 }),
  ],
  signup
);
router.post(
  '/signin',
  [
    check('email', 'Please include a valid email address').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 }),
  ],
  signin
);
router.get('/:userId', getUserData);
module.exports = router;
