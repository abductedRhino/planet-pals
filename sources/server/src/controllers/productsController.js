import Product from '../db/models/productModel.js';

const products = {
    stickynotebert: {
        productID: 1,
        name: "Stickynotebert",
        price: 9.99,
        quantity: 50,
        description: "Meet Stickynotebert, the friendly sticky note from planet Paperonia. Stickynotebert helps you organize your thoughts and keep track of important tasks.",
    }, gizmotron: {
        productID: 2,
        name: "GizmoTron",
        price: 24.99,
        quantity: 20,
        description: "The GizmoTron is the ultimate gadget for tech enthusiasts. Packed with features and advanced functionality, it's a must-have for every tech-savvy individual.",
    },
};

function getSearchview(req, res) {
    Product.find({})
        .exec()
        .then((products) => {
            res.render('products/searchview', {products: products});
        })
        .catch((error) => {
            console.error(error.message);
        });
}

function getProductsApi(req, res) {
    Product.find({})
        .exec()
        .then((products) => {
            res.json(products);
            roll
        })
        .catch((error) => {
            console.error(error.message);
        });
}

function getProduct(req, res) {
    const productID = req.params.productID;
    const product = products[productID];
    res.render("products/product", {product});
}

function getProductsViaApi(req, res) {
    Product.find({})
        .exec()
        .then((products) => {
            res.render("products/products_via_api", {json: JSON.stringify(products)});
        })
        .catch((error) => {
            console.error(error.message);
        });
}

function getSearchViewProducts(req, res) {
    let filter = {};
    const search = req.body.search;
    console.log("filter:" + search)
    if (search !== "") {
        filter = {name: search};
    }
    Product.find(filter)
        .exec()
        .then((products) => {
            res.render('products/searchview-products', {products: products});
        })
        .catch((error) => {
            console.error(error.message);
            return [];
        });
}

function saveProduct(req, res) {
    new Product(req.body.productID, req.body.name, req.body.price, req.body.quantity, req.body.description)
        .save()
        .then(result => {
            res.render('thanks');
        })
        .catch(error => {
            if (error) {
                console.error(error.message);
                res.send(error);
            }
        })
}

export default {
    getSearchview, getProductsApi, getProduct, getProductsViaApi, getSearchViewProducts, saveProduct,
}
