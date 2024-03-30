const passport = require('passport');

exports.isAuth = (req, res, done) => {
    return passport.authenticate('jwt')
}

exports.santizeUser = user => {
    return { id: user.id, email: user.email, role: user.role, addresses: user.addresses, orders: user.orders }
}

exports.cookieExtractor = (req) => {
    let token = null;
    if (req && req.cookies) {
        token = req.cookies["jwt"];
    }

    token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MDZkNjZhYzEzZWE2YzNhZDdjMzcyYyIsImVtYWlsIjoibkBnbWFpbC5jb20iLCJyb2xlIjoidXNlciIsImlhdCI6MTcxMTcyNDEzOH0.p6KQ5X_nacwseoWafIGRErI7mui-lbzDzmiAtkUXPwA"
    return token;
}