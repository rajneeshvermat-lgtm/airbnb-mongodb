const path = require("path");

// External Module
const express = require("express");

// Local Module
const storeRouter = require("./routes/storeRouter");
const hostRouter = require("./routes/hostRouter");
const rootDir = require("./utils/pathUtil");
const errorsController = require("./controllers/errors");
const { error } = require("console");
const { mongoConnect } = require("./utils/databaseUtil");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.urlencoded());

// Static files
app.use(express.static(path.join(rootDir, "public")));

// Routes
app.use(storeRouter);
app.use("/host", hostRouter);

// 404 Page
app.use(errorsController.pageNotFound);

const PORT = 3000;

mongoConnect(() => {
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
});
