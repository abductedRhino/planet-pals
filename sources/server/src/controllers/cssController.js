import utils from "../utils.js";

export default {

    getCssBootstrap(req, res) {
        res.writeHead(200, {"Content-Type": "text/css"});
        utils.getFile("public/css/bootstrap-4.0.0-dist/css/bootstrap.min.css", res);
    },

}