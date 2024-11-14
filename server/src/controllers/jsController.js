import {getFile} from "../utils.js";

function getJsHtmx(req, res) {
    res.writeHead(200, {"Content-Type": "application/javascript"});
    getFile("public/js/htmx.min.js", res);
}

function getJsBackgroundBundle (req, res) {
    res.writeHead(200, {"Content-Type": "application/javascript"});
    getFile("public/js/background.bundle.js", res);
}

export default {
    getJsHtmx,
    getJsBackgroundBundle,
}
