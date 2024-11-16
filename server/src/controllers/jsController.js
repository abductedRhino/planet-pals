import express from 'express'
import utils from "../utils.js";


export default {

    /**
     * @param req {express.Request}
     * @param res {express.Response}
     */
    getJsHtmx(req, res) {
        res.writeHead(200, {"Content-Type": "application/javascript"});
        utils.getFile("public/js/htmx.min.js", res);
    },

    /**
     * @param req {express.Request}
     * @param res {express.Response}
     */
    getJsBackgroundBundle(req, res) {
        res.writeHead(200, {"Content-Type": "application/javascript"});
        utils.getFile("public/js/background.bundle.js", res);
    },

}
