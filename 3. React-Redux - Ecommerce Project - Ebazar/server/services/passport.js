require('dotenv').config();

const passport = require('passport');
const { User } = require('../model/User.js');
const LocalStrategy = require('passport-local').Strategy
const crypto = require('crypto');
const JwtStrategy = require('passport-jwt').Strategy;
const jwt = require('jsonwebtoken');
const { santizeUser, cookieExtractor } = require('./common.js');
const session = require('express-session');
const e = require('express');


const secretKey = process.env.SECRET_KEY

//jwt authentication
var opts = {
    jwtFromRequest: cookieExtractor,
    secretOrKey: secretKey
}

exports.sessionMiddleware = session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
})

exports.authenticateSession = () => {
    return passport.authenticate('session')
}

//passport strategies
passport.use('local', new LocalStrategy(
    { usernameField: "email" },
    async function (email, password, done) {
        try {
            const user = await User.findOne({ email: email }).exec()
            if (!user) {
                return done(null, false, { message: 'No such user email' })
            }
            crypto.pbkdf2(password, user.salt, 310000, 32, 'sha256', async function (err, hashedPassword) {
                if (!crypto.timingSafeEqual(user.password, hashedPassword)) {
                    done(null, false, { message: 'Invalid credentials' })
                } else {
                    const token = jwt.sign({ id: user._id }, secretKey);
                    return done(null, { info: santizeUser(user), token: token }) //this line sends to serializer
                }
            });
        } catch (error) {
            return done(error)
        }
    }
));


passport.use('jwt', new JwtStrategy(opts, async function (jwt_payload, done) {
    let user = null
    if (jwt_payload.id !== null) {
        user = await User.findOne({ _id: jwt_payload.id });
    }
    try {
        if (user) {
            return done(null, santizeUser(user)); //this calls serializer
        } else {
            return done(null, false);
            // or you could create a new account
        }
    } catch (error) {
        return done(err, false);
    }
}));


passport.serializeUser(function (user, cb) {
    process.nextTick(function () {
        return cb(null, santizeUser(user));
    });
});

passport.deserializeUser(function (user, cb) {
    process.nextTick(function () {
        return cb(null, user);
    });
});
