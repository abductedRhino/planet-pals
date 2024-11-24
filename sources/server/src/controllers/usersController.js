import express from 'express';
import User from '../db/models/userModel.js';
import {verify as _verify} from 'argon2';
import passport from "passport";
import LocalStrategy from "passport-local";
import {hash} from "argon2";


async function verifyPassword(hashOfPassword, plainTextPassword) {
    try {
        const result = await _verify(hashOfPassword, plainTextPassword);
        if (result) {
            return 'correct';
        } else {
            return 'wrong';
        }
    } catch (error) {
        return 'error';
    }
}

async function hashPassword(plainTextPassword) {
    return await hash(plainTextPassword);
}

passport.use(new LocalStrategy({passReqToCallback: true},
    function (req, email, pass, done) {
        User.findOne({email: email})
            .then((user) => verify(req, user, done))
            .catch((err) => done(err));
    }
));

/**
 * @param req {express.Request}
 * @param res {express.Response}
 * @returns {Promise<void>}
 */
async function loginUser(req, res) {
    User.findOne({email: req.body.user})
        .then(async (user) => {
            if (user == null) {
                console.log('user not found:' + req.body.user);
                res.render('users/register')
            }
            console.log(user)
            const result = await verifyPassword(user.password, req.body.password);
            if (result === 'correct') {
                console.log('correct password');
                // TODO: change to redirect
                res.render('index', {username: user.firstName});
            } else if (result === 'wrong') {
                res.render('users/login');
                console.log('wrong password');
            } else {
                console.log('error in verifyPassword');
            }
        })
        .catch((error) => {
            console.error(error);
        })
}

/**
 *
 * @param req {express.Request}
 * @param user {User}
 * @param done {Function}
 * @returns {Promise<*>}
 */
async function verify(req, user, done) {
    console.log("aslkdfalkdsjfldsajflksadjflasdjflk")
    if (!user) {
        return done(null, false);
    }
    if (await verifyPassword(user.password, req.body.password) === 'correct') {
        req.body.user = user;
        return done(null, user);
    }
    return done(null, false);
}

passport.serializeUser(function (user, done) {
    done(null, user.email);
});

passport.deserializeUser(async (email, done) => {
    try {
        const user = await User.findOne({email: email});
        done(null, user);
    } catch (err) {
        done(err);
    }
});

export default {
    /**
     * @param req {express.Request}
     * @param res {express.Response}
     */
    async postRegister(req, res) {
        console.log(req.body);
        new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: await hashPassword(req.body.password),
            address: req.body.address
        })
            .save()
            .then(result => {
                console.log(result);
                res.render('users/register_success', {user: req.body.firstName, id: result.id});
            })
            .catch(error => {
                if (error) {
                    console.error(error.message);
                    res.render('users/register_fail', {message: error.message});
                }
            })
    },

    /**
     * @param req {express.Request}
     * @param res {express.Response}
     */
    getUsers(req, res) {
        User.find({})
            .then((users) => {
                res.render('users/usersTable', {users: users});
            })
            .catch((error) => {
                console.error(error.message);
            });
    },

    /**
     * @param req {express.Request}
     * @param res {express.Response}
     */
    getLogin(req, res) {
        res.render('users/login');
    },

    /**
     * @param req {express.Request}
     * @param res {express.Response}
     */
    postLoginPassword(req, res) {
        passport.authenticate('local', {failureRedirect: '/users/login', failureFlash: true, successRedirect: '/'})
    },

    /**
     * @param req {express.Request}
     * @param res {express.Response}
     * @param next {express.NextFunction}
     */
    postLogout(req, res, next) {
        req.logout((err) => {
            if (err) {
                return next(err);
            }
            res.redirect("/users/login");
            console.log('success fully logged out')
        })
    },

    /**
     * @param req {express.Request}
     * @param res {express.Response}
     */
    getProfile(req, res) {
        console.log(req.query)
        console.log(req.query.apiToken)
        User.findOne({apiToken: req.query.apiToken})
            .then(async (user) => {
                if (!user) {
                    res.render('users/register')
                } else {
                    res.render('users/profile', {user: user});
                }
            })
            .catch((error) => {
                console.error(error);
            })
    },

    /**
     * @param req {express.Request}
     * @param res {express.Response}
     */
    putUsers(req, res) {
        const update = {};
        update[req.body.key] = req.body.value;
        User.findByIdAndUpdate(req.body.id, update, {new: true})
            .then((user) => {
                if (user === null) {
                    console.warn('no user with id', req.body.id);
                } else {
                    res.render('p', {key: req.body.key, value: req.body.value});
                }
            })
            .catch((error) => {
                console.error(error);
                res.render('users/register');
            });
    },

    /**
     * @param req {express.Request}
     * @param res {express.Response}
     */
    deleteProfile(req, res) {
        User.findByIdAndDelete(req.body.id)
            .then((user) => {
                if (user === null) {
                    console.warn('no user with id', req.body.id);
                } else {
                    res.render('users/bye', {id: req.body.id, name: user.firstName});
                }
            })
            .catch((error) => {
                console.error(error);
                res.render('users/register');
            });
    },

    /**
     * @param req {express.Request}
     * @param res {express.Response}
     */
    postProfile(req, res) {
        console.log(req.body.id)
        User.findById(req.body.id)
            .then((user) => {
                if (user === null) {
                    res.render('users/register')
                } else {
                    res.render('users/profile', {user: user});
                }
            })
            .catch((error) => {
                console.error(error);
                res.render('users/register');
            });
    },

    /**
     * @param req {express.Request}
     * @param res {express.Response}
     */
    getRegister(req, res) {
        res.render('users/register', {id: ''});
    },

    /**
     * @param req {express.Request}
     * @param res {express.Response}
     * @param next {express.NextFunction}
     */
    async verifyToken(req, res, next) {
        try {
            const apiToken = req.query.apiToken;

            if (!apiToken) {
                return res.status(400).send('API token is required');
            }

            const user = await User.findOne({apiToken});

            if (!user) {
                return res.status(401).send('Invalid API token');
            }

            req.user = user;
            next();
        } catch (err) {
            res.status(500).send('Server error');
        }
    },


}
