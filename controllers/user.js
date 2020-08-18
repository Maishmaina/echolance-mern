const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const gravatar = require("gravatar");
const User = require("../models/User");
const validateRegisterInput = require("../validation/register");
const validateLoginInput = require("../validation/login");

//@desc     Register user
//@route    POST api/user/register
//@access   Public

exports.register = async (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const user = await User.findOne({ email: req.body.email });
  if (user) {
    errors.email = "User with That Email Exist";
    return res.status(400).json(errors);
  } else {
    const avatar = gravatar.url(req.body.email, {
      s: "200",
      r: "pg",
      d: "mm",
    });
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      avatar,
      phone: req.body.phone,
      description: req.body.description,
      password: req.body.password,
    });
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser
          .save()
          .then((user) => res.json(user))
          .catch((err) => console.log(err));
      });
    });
  }
};
//@desc     Login user
//@route    POST api/user/login
//@access   Public

exports.login = async (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const email = req.body.email;
  const password = req.body.password;
  const user = await User.findOne({ email });
  if (!user) {
    errors.email = "You have not yet created Account, Please Register";
    return res.status(404).json(errors);
  }
  //check password
  const isMatch = await bcrypt.compare(password, user.password);
  if (isMatch) {
    const payload = {
      id: user.id,
      name: user.name,
      avatar: user.avatar,
      phone: user.phone,
      description: user.description,
      role: user.role,
      verify: user.verify,
      status: user.status,
    };
    jwt.sign(
      payload,
      process.env.SECRET_OR_KEY,
      { expiresIn: 43200 },
      (err, token) => {
        res.json({ success: true, token: "Bearer " + token });
      }
    );
  } else {
    errors.password = "Password is Incorrect";
    return res.status(400).json(errors);
  }
};

//@desc     Return Current User
//@route    GET api/user/current
//@access   Private
exports.currentUser = async (req, res) => {
  res.json({
    id: req.user.id,
    name: req.user.name,
    avatar: req.user.avatar,
    phone: req.user.phone,
    description: req.user.description,
    role: req.user.role,
    verify: req.user.verify,
    status: req.user.status,
  });
};
