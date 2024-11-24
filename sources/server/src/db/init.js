import mongoose from "mongoose";
import products from "./seed/productSeed.js";
import users from "./seed/userSeed.js";


function fill() {
    fillProducts()
    fillUsers()
}

function fillProducts() {
    products.forEach(product => product
        .save()
        .then(() => console.info(`db saved product: ${product.name}`))
        .catch(() => console.warn(`unable to save product: ${product.name}`)));
}

function fillUsers() {
    users.forEach(user => user
        .save()
        .then(() => console.info(`db saved user: ${user.firstName}`))
        .catch(() => console.warn(`unable to save user: ${user.firstName}`)));
}


export default {
    init() {
        mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost:27017/basic')
            .then(() => mongoose.connection.once('open', fill))
            .catch(error => console.error(error))
    }
}