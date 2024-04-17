const passport = require('passport');

exports.isAuth = (req, res, done) => {
    return passport.authenticate('jwt')
}

exports.santizeUser = user => {
    return { id: user.id, email: user.email, role: user.role, addresses: user.addresses, address:user.address, orders: user.orders, name:user.name, phone:user.phone, image:user.image }
}

exports.cookieExtractor = (req) => {
    // let token = null;
    // if (req && req.cookies) {
    //     token = req.cookies["jwt"];
    // }

    let token = '';
    let i = 0;
    let cookieName = `jwt_${i}`;
    while (req && req.cookies[cookieName]) {
        token += req.cookies[cookieName];
        i++;
        cookieName = `jwt_${i}`;
    }

    return token;
}