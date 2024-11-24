import express from 'express';
export default {

    /**
     * @param req {express.Request}
     * @param res {express.Response}
     * @param next {express.NextFunction}
     */
    getShoppingcart(req, res, next) {
        if (!req.user) {
            return next()
        }
        res.render('shoppingcart', {user: req.user});
    },

    /**
     * @param req {express.Request}
     * @param res {express.Response}
     */
    renderSearchView(req, res) {
        res.render('searchview', {products: req.data});
    },

    /**
     * @param req {express.Request}
     * @param res {express.Response}
     */
    getGreeting(req, res) {
        res.render('index', {username: req.params.username});
    },

    /**
     * @param req {express.Request}
     * @param res {express.Response}
     */
    getHome(req, res) {
        res.render('index', {username: 'Tobi'});
    },

}