import {Router} from 'express';

const router = Router();

import usersController from "../controllers/usersController.js";
import productsController from "../controllers/productsController.js";
import jsController from "../controllers/jsController.js";
import textureController from "../controllers/texturesController.js";
import homeController from "../controllers/homeController.js";
import errorController from "../controllers/errorController.js";
import cssController from "../controllers/cssController.js";

router.get("/product/:productID", productsController.getProduct);

router.get("/products/searchview", productsController.getSearchview);
router.post("/products/searchview", productsController.getSearchViewProducts);
router.get("/products", productsController.getProductsApi);

router.get("/users/users", usersController.getUsers);
router.put("/users/users", usersController.putUsers);
router.get("/users/profile", usersController.getProfile);
router.post("/users/profile", usersController.postProfile);
router.put("/users/profile", usersController.putUsers);
router.delete("/users/profile", usersController.deleteProfile);
router.get("/users/login", usersController.getLogin);
router.post("/users/login/password", usersController.postLoginPassword);
router.get("/users/register", usersController.getRegister);
router.post("/users/register", usersController.postRegister);
router.post("/users/logout", usersController.postLogout);

router.get("/bootstrap.css", cssController.getCssBootstrap);
router.get("/htmx.min.js", jsController.getJsHtmx)
router.get("/background.bundle.js", jsController.getJsBackgroundBundle);
router.get("/textures/:texture", textureController.getTextures);

router.get("/renderProducts", productsController.getProductsViaApi);

router.get("/", homeController.getHome);
router.get("/greeting/:username", homeController.getGreeting); // Render the index view
router.get("/shoppingcart", homeController.getShoppingcart);  // Read shoppingcart
//router.put("/shoppingcart", homeController.updateShoppingCart);  // Update shoppingcart

router.use(errorController.internalServerError);
router.use(errorController.pageNotFoundError);

export default router;
