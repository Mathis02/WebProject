// Imports
var jwt = require('jsonwebtoken');

// Constants
const JWT_SIGN_SECRET = '0sjhkgiold67jdglsopiok85ggdbb2raf';

// Exported functions
module.exports = {
    generateTokenForUser: function(userData) {
        return jwt.sign({
                userId: userData.id
            },
            JWT_SIGN_SECRET,
            {
                expiresIn: '1h'
            })
    },
    parseAuthorization: function(authorization) {
        return (authorization != null) ? authorization.replace('Bearer ', '') : null;
    },
    getUserId: function(authorization) {
        var userId = -1;
        var token = module.exports.parseAuthorization(authorization);
        if(token != null) {
            try {
                var jwtToken = jwt.verify(token, JWT_SIGN_SECRET);
                if(jwtToken != null)
                    userId = jwtToken.userId;
            } catch(err) { }
        }
        return userId;
    }
}