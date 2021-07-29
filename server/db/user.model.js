const JWT = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const db = require("./database");
const Sequelize = require("sequelize");
const { STRING } = Sequelize;

const User = db.define("user", {
  username: STRING,
  password: STRING,
});

async function hasher({ password }) {
  const SALT_COUNT = 5;
  const hashedPWD = await bcrypt.hash(password, SALT_COUNT);
  return hashedPWD;
}
const verifyLogin = async (password, hash) =>
  await bcrypt.compare(password, hash);

User.beforeCreate(async (user) => {
  user.password = await hasher(user);
});

User.byToken = async (token) => {
  try {
    console.log(token, process.env.JWTSecret);
    const data = JWT.verify(token, process.env.JWTSecret);
    const user = await User.findByPk(data.userId);
    if (user) {
      return user;
    }
    const error = Error("bad credentials");
    error.status = 401;
    throw error;
  } catch (ex) {
    const error = Error("bad credentials");
    error.status = 401;
    throw error;
  }
};

User.authenticate = async ({ username, password }) => {
  const user = await User.findOne({
    where: {
      username,
    },
  });
  if (await verifyLogin(password, user.password)) {
    const token = JWT.sign({ userId: user.id }, process.env.JWTSecret);
    return token;
  }
  const error = Error("bad credentials");
  error.status = 401;
  throw error;
};
module.exports = User;
