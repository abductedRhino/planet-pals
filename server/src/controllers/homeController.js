

function getShoppingcart(req, res, next) {
    if (!req.user) {
        return next()
    }
    res.render("shoppingcart", {user: req.user});
}

function renderSearchView(req, res) {
    res.render("searchview", {products: req.data});
}

function getGreeting(req, res) {
    res.render("index", {username: req.params.username});
}

function getHome(req, res) {
    res.render("index", {username: 'Tobi'});
}

export default {
    getShoppingcart, renderSearchView, getGreeting, getHome,
}