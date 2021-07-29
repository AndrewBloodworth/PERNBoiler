"use strict";

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const { db } = require("./server/db");
const app = require("./server");
const PORT = 1337;

db.sync() // if you update your db schemas, make sure you drop the tables first and then recreate them
  .then(() => {
    console.log("db synced");
    console.log(process.env.MySuperFakeObviouslyNotSupposedToBeHereSecret);
    app.listen(PORT, () =>
      console.log(`studiously serving silly sounds on port ${PORT}`)
    );
  });
