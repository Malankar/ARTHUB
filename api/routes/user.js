const User = require("../models/User");
const {
  verifyTokenAndAuthorization,
} = require("./verifyToken");

const router = require("express").Router();

//GET USER
router.get("/find/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
