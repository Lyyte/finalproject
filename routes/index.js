const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// Uses all routes for accessing and manipulating database
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.resolve((__dirname, '../build/index.html')));
})

module.exports = router;

