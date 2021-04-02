const User = require('../models/UserModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const colors = require('colors');

exports.getUserById = async (req, res, next, id) => {
  console.log(`Get user by id`.blue);
  try {
    let foundUser = await User.findOne({ _id: id });
    if(!foundUser) {
      return res.status(401).json({success:false});
    }
    req.userData = foundUser;
    next();
  } catch (error) {
    console.log(`Get UserID.. Something went wrong`.red.bold);
    return res.status(400).json({ success: false, msg: 'User not found' });
  }
};
exports.getUserData = async (req,res) => {
  try {
    res.status(200).json({sucess:true,data:req.userData});
  } catch {
    res.status(500).json({sucess:false,msg:"Server Error"});
  }
}

exports.signup = async (req, res) => {
  console.log(`Signing up...`.blue.bold);
  const { username, email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) {
      console.log(`User exists`.red.bold);
      return res
        .status(400)
        .json({ success: false, msg: 'User already exists' });
    }

    user = new User({ username, email, password });
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    await user.save();

    res
      .status(200)
      .json({ sucess: true, msg: 'user sign up successful', user });
  } catch (error) {
    console.log(`Sign in..Something went wrong `.red.bold);
    console.log(error.message);
    res.status(500).json({ success: false, msg: error.message });
  }
};

exports.signin = async (req, res) => {
  console.log(`Signing in...`.green.bold);
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ success: false, msg: 'This user does not exists' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(400)
        .json({ success: false, msg: 'Email or pwd is incorrect' });
    }
    const payload = {
      user: {
        id: user._id,
      },
    };
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: '7 days' },
      (err, token) => {
        if (err) throw err;
        console.log(`sign in successfull`.green.bold);
        res
          .status(200)
          .json({ sucess: true, msg: 'user sign in successful', user, token });
      }
    );
  } catch (error) {
    console.log(`Log in...Something went wrong `.red.bold);
    console.log(error.message);
    res.status(500).json({ success: false, msg: error.message });
  }
};

exports.auth = async (req, res, next) => {
  console.log(`Authenticating...`.blue.bold);
  try {
    if (
      req.headers.authorization &&
      req.headers.authorization.split(' ')[0] === 'Bearer'
    ) {
      const token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.userId = decoded;
      next();
    } else {
      console.log(`Failed`.red);
      return res.status(401).json({ success: false, msg: 'Auth failed' });
    }
  } catch (err) {
    return res.status(401).json({ success: false, msg: 'Auth failed' });
  }
};
