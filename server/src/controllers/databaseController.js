import Product from '../db/models/productModel.js';
import User from '../db/models/userModel.js';
import products from '../db/seed/productSeed.js';
import users from '../db/seed/userSeed.js';


export function create_product(item) {
    new Product(item).save().then(() => console.log(`saved ${item.name}`));
}

