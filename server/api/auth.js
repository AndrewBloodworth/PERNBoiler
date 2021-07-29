const router = require("express").Router();
const { User } = require("../db");

const requireToken = async (req, res, next) => {
  try {
    req.user = await User.byToken(req.cookies.token);
    next();
  } catch (e) {
    next(e);
  }
};

router.post("/", async (req, res, next) => {
  try {
    const token = await User.authenticate(req.body);
    let cookie = req.cookies.token;
    if (cookie === undefined) {
      //, httpOnly: true
      //24hr X 60min X 60min X 100ms = 8,640,000ms
      res.cookie("token", token, { maxAge: 8640000 });
      console.log("cookie created successfully");
    } else {
      console.log("cookie exists", cookie);
    }
    res.sendStatus(201);
  } catch (ex) {
    next(ex);
  }
});

router.get("/", requireToken, async (req, res, next) => {
  try {
    res.send(req.user);
  } catch (ex) {
    next(ex);
  }
});

router.put("/", async (req, res, next) => {
  try {
    let cookie = req.cookies.token;
    if (cookie === undefined) {
      console.log("no cookie to destory");
    } else {
      res.cookie("token", "", { maxAge: 0 });
      console.log("cookie destroyed");
    }
    res.send(204);
  } catch (ex) {
    next(ex);
  }
});

module.exports = router;
