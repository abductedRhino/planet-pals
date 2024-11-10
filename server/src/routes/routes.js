import {Router} from 'express';
import passport from "passport";
const router = Router();

import { getFile } from "../utils.js";
import { getAllProducts, getFilteredProducts, getAllProductsJSON, getAllProductsJSONRendered } from "../controllers/productsController.js";
import { renderUsersTable, updateUser, renderProfile, renderUser, deleteUser, renderLogin } from "../controllers/usersController.js";
import { renderRegisterView, registerUser } from "../controllers/registerController.js";
import { renderIndex2, renderIndex, renderShoppingCart, renderProductView } from "../controllers/homeController.js";
import { internalServerError, pageNotFoundError } from "../controllers/errorController.js";

router.get("/products/searchview", getAllProducts);
router.post("/products/searchview", getFilteredProducts);

router.get("/users/users", renderUsersTable);
router.put("/users/users", updateUser);

router.get("/users/register", renderRegisterView);
router.post("/users/register", registerUser);

router.get("/users/profile", renderProfile);
router.post("/users/profile", renderUser);
router.put("/users/profile", updateUser);
router.delete("/users/profile", deleteUser);
router.get("/users/login", renderLogin);
router.post("/users/login/password",
    passport.authenticate('local', { failureRedirect: '/users/login', failureFlash: true,
        successRedirect: '/'}));
router.post("/users/logout", (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        res.redirect("/users/login");
        console.log('success fully logged out')
    })
})
router.get("/bootstrap.css", (req, res) => {
    res.writeHead(200, {"Content-Type": "text/css"});
    getFile("public/css/bootstrap-4.0.0-dist/css/bootstrap.min.css", res);
});
router.get("/htmx.min.js", (req, res) => {
    res.writeHead(200, {"Content-Type": "text/js"});
    getFile("public/js/htmx.min.js", res);
});

router.get("/products", getAllProductsJSON);
router.get("/renderProducts",  getAllProductsJSONRendered);


router.get("/", renderIndex2);
router.get("/greeting/:username", renderIndex); // Render the index view
router.get("/shoppingcart", renderShoppingCart);  // Read shoppingcart
//router.put("/shoppingcart", homeController.updateShoppingCart);  // Update shoppingcart
router.get("/product/:productID", renderProductView);

router.use(internalServerError);
router.use(pageNotFoundError);

export default router;
