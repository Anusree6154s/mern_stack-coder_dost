const passport = require('passport');

exports.isAuth = (req, res, done) => {
    return passport.authenticate('jwt')
}

exports.santizeUser = user => {
    return { id: user.id, email: user.email, role: user.role, addresses: user.addresses, orders: user.orders, name:user.name, phone:user.phone, image:user.image }
}

exports.cookieExtractor = (req) => {
    let token = null;
    if (req && req.cookies) {
        token = req.cookies["jwt"];
    }

    // token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MDZkNjZhYzEzZWE2YzNhZDdjMzcyYyIsImVtYWlsIjoibkBnbWFpbC5jb20iLCJyb2xlIjoidXNlciIsImlhdCI6MTcxMTcyNDEzOH0.p6KQ5X_nacwseoWafIGRErI7mui-lbzDzmiAtkUXPwA"

    // token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MDZjMzA4N2M3NGM0M2MxN2RhMjI1ZiIsImVtYWlsIjoibUBnbWFpbC5jb20iLCJyb2xlIjoidXNlciIsImlhdCI6MTcxMTcxOTIyNn0.9-qIjkRpeZiQt1camGwPEvQ7phJWlZH036qNDV1YbnA"

    // token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MTIxMWVjNzc3MTZlZmExMTNlN2ZiNSIsImVtYWlsIjoicUBnbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJhZGRyZXNzZXMiOltdLCJvcmRlcnMiOltdLCJpYXQiOjE3MTI0NjAyNjh9.FRjAFBAwUSbfrySjHoJE9r9MYMuJNbatAUskbdBNHAU"
    
    return token;
}