import {getFile} from "../utils.js";

function getCssBootstrap(req, res) {
    res.writeHead(200, {"Content-Type": "text/css"});
    getFile("public/css/bootstrap-4.0.0-dist/css/bootstrap.min.css", res);
}

export default {
    getCssBootstrap,
}