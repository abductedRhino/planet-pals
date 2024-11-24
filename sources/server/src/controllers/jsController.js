import express from 'express'
import utils from "../utils.js";


export default {

    /**
     * @param req {express.Request}
     * @param res {express.Response}
     * @param next {express.NextFunction}
     */
    getJsHtmx(req, res, next) {
        utils.sendFileContents("src/public/js/htmx.min.js", res, next);
    },

    /**
     * @param req {express.Request}
     * @param res {express.Response}
     * @param next {express.NextFunction}
     */
    getJsBackgroundBundle(req, res, next) {
        utils.sendFileContents("src/public/js/background.bundle.js", res, next);
    },

}
