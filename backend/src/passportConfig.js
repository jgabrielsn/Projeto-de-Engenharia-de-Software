const fs = require('fs');
const path = require('path');
const connection = require('./models/connection');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

const pathToKey = path.join(__dirname, '.', 'id_rsa_pub.pem');
const PUB_KEY = fs.readFileSync(pathToKey, 'utf8');


const options = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: PUB_KEY,
    algorithms: ['RS256']
};

const strategy = new JwtStrategy(options, (payload, done) => {
    const id = payload.sub;
    const query = 'SELECT * FROM users WHERE UserID = ?';
    connection.execute(query, [id])
        .then((user)=>{
            if (user) {
                return done(null, user);
            }
            else {
                return done (null, false);
            }
        })
        .catch(err => done(err, null));
});

module.exports = (passport) => {
    passport.use(strategy);
};