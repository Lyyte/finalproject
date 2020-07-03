require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const bodyParser = require("body-parser");
const passport = require("passport");
const PORT = process.env.PORT || 3001;


const users = require("./routes/api/index");
const categoryRoutes = require('./routes/category');
const productRoutes = require("./routes/category")


// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("build"));
}

// Add routes, both API and view
app.use(routes);

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/index", users);
app.use('/api', categoryRoutes);
app.use('/api', productRoutes)




mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/clothingStore");

app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
})