const router = require("express").Router();
const passport = require("passport");

const utils = require("../utils");
const productsController = require("../controllers/productsController");
const usersController = require("../controllers/usersController");
const registerController = require("../controllers/registerController");
const homeController = require("../controllers/homeController");
const errorController = require("../controllers/errorController");

router.get("/products/searchview", productsController.getAllProducts);
router.post("/products/searchview", productsController.getFilteredProducts);

router.get("/users/users", usersController.renderUsersTable);
router.put("/users/users", usersController.updateUser);

router.get("/users/register", registerController.renderRegisterView);
router.post("/users/register", registerController.registerUser);

router.get("/users/profile", usersController.renderProfile);
router.post("/users/profile", usersController.renderUser);
router.put("/users/profile", usersController.updateUser);
router.delete("/users/profile", usersController.deleteUser);
router.get("/users/login", usersController.renderLogin);
router.post("/users/login/password",
    passport.authenticate('local', { failureRedirect: '/users/login', failureFlash: true,
        successRedirect: '/'}));
router.post("/users/logout", (req, res, next) => {
    req.logout((err) => {
        if (err) {
            console.error('fuck')
            return next(err);
        }
        res.redirect("/users/login");
        console.log('success fully logged out')
    })
})
router.get("/bootstrap.css", (req, res) => {
    res.writeHead(200, {"Content-Type": "text/css"});
    utils.getFile("public/css/bootstrap-4.0.0-dist/css/bootstrap.min.css", res);
});
router.get("/htmx.min.js", (req, res) => {
    res.writeHead(200, {"Content-Type": "text/js"});
    utils.getFile("public/js/htmx.min.js", res);
});

router.get("/products", productsController.getAllProductsJSON);
router.get("/renderProducts",  productsController.getAllProductsJSONRendered);


router.get("/", homeController.renderIndex2);
router.get("/greeting/:username", homeController.renderIndex); // Render the index view
router.get("/shoppingcart", homeController.renderShoppingCart);  // Read shoppingcart
//router.put("/shoppingcart", homeController.updateShoppingCart);  // Update shoppingcart
router.get("/product/:productID", homeController.renderProductView);

router.use(errorController.internalServerError);
router.use(errorController.pageNotFoundError);

module.exports = router;
