import utils from "../utils.js";

export default {

    getCssBootstrap(req, res, next) {
        utils.sendFileContents("src/public/css/bootstrap-4.0.0-dist/css/bootstrap.min.css", res, next);
    },

}