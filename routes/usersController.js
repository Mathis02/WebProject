// Imports
var bcrypt = require('bcrypt');
var jwtUtils = require('../utils/jwt.utils');
var models = require('../models');

// consts
const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,15}$/;

// Routes
module.exports = {
    register: function (req, res) {
        // Params
        var name_user = req.body.name_user;
        var firstname_user = req.body.firstname_user;
        var mail_user = req.body.mail_user;
        var password_user = req.body.password_user;

        if (name_user == null || firstname_user == null || mail_user == null || password_user == null) {
            return res.status(400).json({ 'error': 'missing parameters' });
        }

        if (!PASSWORD_REGEX.test(password_user)) {
            return res.status(400).json({ 'error': 'invalid password' });
        }


        models.my_User.findOne({
            attributes: ['mail_user'],
            where: { mail_user: mail_user }
        })
            .then(function(userFound) {
                if (!userFound) {

                    bcrypt.hash(password_user, 5, function( err, bcryptedPassword ) {
                        var newUser = models.my_User.create({
                            name_user: name_user,
                            firstname_user: firstname_user,
                            mail_user: mail_user,
                            password_user: bcryptedPassword
                        })
                            .then(function(newUser) {
                                return res.status(201).json({
                                    'userId': newUser.id_User
                                })
                            })
                            .catch(function(err) {
                                return res.status(500).json({ 'error': err });
                            });
                    });

                } else {
                    return res.status(400).json({ 'error': 'user already exist' });
                }
            })
            .catch(function(err) {
                return res.status(500).json({ 'error': 'unable to verify user'});
            });

    },
    login: function (req, res) {
        // Params
        var mail_user = req.body.mail_user;
        var password_user = req.body.password_user;

        if (mail_user == null || password_user == null) {
            return res.status(400).json({ 'error' : 'missing parameters' })
        }

        models.my_User.findOne({
            where: { mail_user: mail_user }
        })
            .then(function(userFound) {
                if (userFound) {

                    bcrypt.compare(password_user, userFound.password_user, function (errBycrypt, resBycrypt) {
                        if(resBycrypt) {
                        return res.status(200).json({
                            'userId': userFound.id,
                            'token': jwtUtils.generateTokenForUser(userFound)
                        });
                    } else {
                            return res.status(403).json({ "error": "invalid password" });
                    }
                    });
                } else {
                    return res.status(404).json({ 'error': 'user not exist' });
                }
            })
            .catch(function(err) {
                return res.status(500).json({ 'error': 'cannot log on user' });
            });

    },
    getUserProfile: function(req, res) {
        // Getting auth header
        var headerAuth = req.headers['authorization'];
        var userId = jwtUtils.getUserId(headerAuth);

        /*if (userId < 0)
            return res.status(400).json({ 'error': 'wrong token' });*/

        models.my_User.findOne({
            attributes: [ 'id', 'name_user', 'firstname_user', 'mail_user'],
            where: { id: userId }
        }).then(function(user) {
            if (user) {
                res.status(200).json(user);
            } else {
                res.status(404).json({ 'error': 'user not found' });
            }
        }).catch(function(err) {
            res.status(500).json({ 'error': 'cannot fetch user' });
        });
    },
    /*updateUserProfile: function(req, res) {
        // Getting auth header
        var headerAuth = req.headers['authorization'];
        var userId = jwtUtils.getUserId(headerAuth);

        // Params
        var bio = req.body.bio;

        models.my_User.findOne({
            attributes: ['id'],
            where: { id: userId }
        }).then(function (userFound) {
            if (userFound) {
                userFound.update({


                return res.status(201).json(userFound);
            } else  {
                res.status(404).json({ 'error': 'user not found' })
            }
            }).catch(function(err) {
            res.status(500).json({ 'error': 'cannot update user'});
        });
    }*/
}