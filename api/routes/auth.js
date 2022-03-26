//Authentication code for user in DB
//Import Following modules
const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js"); // This module is used to save password in encrpted format in DB
const jwt = require("jsonwebtoken");

//REGISTER
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username, //this will take input
    email: req.body.email, //input from html
    password: CryptoJS.AES.encrypt(
      req.body.password, //input from html
      process.env.PASS_SEC //verify the passkey for crypto which is provided in env file
    ).toString(),
  });

  try {
    const savedUser = await newUser.save(); //if the above code is right this will save the user in db
    res.status(201).json(savedUser); //give us a response if user is saved
  } catch (err) {
    res.status(500).json("User already exists"); //This will throw error if any
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username }); //html input and execute findone query of mongo db
    if (!user) {
      return res.status(401).json("Wrong Username!"); //if the user does not exists in db it will throw this error
    }
    const hashedPassword = CryptoJS.AES.decrypt(
      //decrpting the password
      user.password, //take input from html
      process.env.PASS_SEC //verify the cryptojs key
    );
    const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8); //convert the key to string and compare

    if (OriginalPassword !== req.body.password) {
      return res.status(401).json("Wrong Password!"); //if the pass is incorrect then throw this error
    }

    const accessToken = jwt.sign(
      //verify if admin
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SEC,
      { expiresIn: "3d" } //time to persist the JWT token
    );

    const { password, ...others } = user._doc; //save credentials for furthur use except password
    return res.status(200).json({ ...others, accessToken }); //display the credentials except password
  } catch (err) {
    return res.status(500).json(err); //throw error if any
  }
});

module.exports = router;
