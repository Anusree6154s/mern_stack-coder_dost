const passport = require('passport');

exports.isAuth = (req, res, done) => {
    return passport.authenticate('jwt')
}

exports.santizeUser = user => {
    return { id: user.id, email: user.email, role: user.role, addresses: user.addresses, address: user.address, orders: user.orders, name: user.name, phone: user.phone, image: user.image }
}

exports.cookieExtractor = (req) => {
    let token = null;
    if (req && req.cookies) {
        token = req.cookies["jwt"];
    }
    return token;
}