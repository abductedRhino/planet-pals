import { html } from "./contentTypes.js";
import utils from "./utils.js";

// create route objects to hold route functions
const routes = {
    "GET": {},
    "POST": {}
};

// create handle function to handle requests
export function handle(req, res, next) {
    try {
        routes[req.method][req.url](req, res);
    } catch (e) {
        res.writeHead(200, html);
        utils.sendFileContents("views/error.html", res, next);
    }
}

// map route functions
export function get(url, action) {
    routes["GET"][url] = action;
}
export function post(url, action) {
    routes["POST"][url] = action;
}
