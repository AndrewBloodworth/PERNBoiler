const router = require("express").Router();
const { User } = require("../db");

router.get("/", async (req, res, next) => {
  try {
    res.send(await User.findAll());
  } catch (e) {
    next(e);
  }
});

router.get("/:userId", async (req, res, next) => {
  try {
    const { userId } = req.params;
    res.send(await User.findByPk(userId));
  } catch (e) {
    next(e);
  }
});

module.exports = router;
