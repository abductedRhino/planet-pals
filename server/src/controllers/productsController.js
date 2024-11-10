import Product from './../models/productModel.js';

export function getAllProducts(req, res) {
  Product.find({})
    .exec()
    .then((products) => {
      res.render('searchview', { products: products });
    })
    .catch((error) => {
      console.error(error.message);
    });
}
export function getAllProductsJSON(req, res) {
  Product.find({})
      .exec()
      .then((products) => {
        res.json(products);
      })
      .catch((error) => {
        console.error(error.message);
      });
}

export function getAllProductsJSONRendered(req, res) {
    Product.find({})
        .exec()
        .then((products) => {
            res.render("products_via_api", {json: JSON.stringify(products)});
        })
        .catch((error) => {
            console.error(error.message);
        });
}
export function getFilteredProducts(req, res) {
  let filter = {};
  const search = req.body.search;
  console.log("filter:" + search)
  if (search !== "") {
    filter = { name: search };
  }
  Product.find(filter)
    .exec()
    .then((products) => {
      res.render('searchview-products', { products: products });
    })
    .catch((error) => {
      console.error(error.message);
      return [];
    });
}

export function saveProduct(req, res) {
  new Product(
    req.body.productID,
    req.body.name,
    req.body.price,
    req.body.quantity,
    req.body.description)
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
