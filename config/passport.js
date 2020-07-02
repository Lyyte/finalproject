const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");
const User = mongoose.model("users");
const key = process.env.secretOrKey;

const opts = {}; // Object literal that controls how token is verified
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken(); // Grab web token
opts.secretOrKey = key; // Key to verify token signature
module.exports = passport => {
  // Collects decoded webtoken and uses ID to search within the database to verify
  // that a user exists
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      User.findById(jwt_payload.id)
        .then(user => {
          if (user) {
            return done(null, user);
          }
          return done(null, false);
        })
        .catch(err => console.log(err));
    })
  );
};