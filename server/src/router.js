import { html } from "./contentTypes.js";
import { getFile } from "./utils.js";

// create route objects to hold route functions
const routes = {
    "GET": {},
    "POST": {}
};

// create handle function to handle requests
export function handle(req, res) {
    try {
        routes[req.method][req.url](req, res);
    } catch (e) {
        res.writeHead(200, html);
        getFile("views/error.html", res);
    }
}

// map route functions
export function get(url, action) {
    routes["GET"][url] = action;
}
export function post(url, action) {
    routes["POST"][url] = action;
}
