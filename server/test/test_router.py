import urllib.request
import urllib.error
import unittest

LOCALHOST = 'http://127.0.0.1:3000'

class GetRoutesTest(unittest.TestCase):
    def test_get_home(self):
        GetRoutesTest._available_template(self, url=f'{LOCALHOST}/')

    def test_get_greeting(self):
        GetRoutesTest._available_template(self, url=f'{LOCALHOST}/greeting/abductedrhino')

    def test_get_product(self):
        GetRoutesTest._available_template(self, url=f'{LOCALHOST}/product/stickynotebert')

    def test_get_products(self):
        GetRoutesTest._available_template(self, url=f'{LOCALHOST}/products')

    def test_get_products_searchview(self):
        GetRoutesTest._available_template(self, url=f'{LOCALHOST}/products/searchview')

    def test_get_renderProducts(self):
        GetRoutesTest._available_template(self, url=f'{LOCALHOST}/renderProducts')

    @unittest.skip(reason='broken')
    def test_get_shoppingcart(self):
        GetRoutesTest._available_template(self, url=f'{LOCALHOST}/shoppingcart')

    def test_get_users_login(self):
        GetRoutesTest._available_template(self, url=f'{LOCALHOST}/users/login')

    def test_get_users_profile(self):
        GetRoutesTest._available_template(self, url=f'{LOCALHOST}/users/profile')

    def test_get_users_register(self):
        GetRoutesTest._available_template(self, url=f'{LOCALHOST}/users/register')

    def test_get_users_users(self):
        GetRoutesTest._available_template(self, url=f'{LOCALHOST}/users/users')

    @staticmethod
    def _available_template(test: unittest.TestCase, url: str):
        try:
            status = str(urllib.request.urlopen(url).status)
        except urllib.error.HTTPError as e:
            status = str(e.status)
        test.assertEqual(status, '200')


class PostRoutesTest(unittest.TestCase):
    
    @unittest.skip(reason='broken')
    def test_post_users_logout(self):
        PostRoutesTest._available_template(self, url=f'{LOCALHOST}/users/logout')
    
    @staticmethod
    def _available_template(test: unittest.TestCase, url: str):
        try:
            status = str(urllib.request.urlopen(url).status)
        except urllib.error.HTTPError as e:
            status = str(e.status)
        test.assertEqual(status, '200')

"""
router.delete("/users/profile", deleteUser);
router.post("/products/searchview", getFilteredProducts);
router.post("/users/profile", renderUser);
router.post("/users/register", registerUser);
router.put("/users/profile", updateUser);
router.put("/users/users", updateUser);
router.put("/shoppingcart", homeController.updateShoppingCart);  // Update shoppingcart
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
    getFile("public/css/bootstrap-4.0.0-dist/css/bootstrap.min.css", res);
});
router.get("/htmx.min.js", (req, res) => {
    res.writeHead(200, {"Content-Type": "text/js"});
    getFile("public/js/htmx.min.js", res);
});
"""

