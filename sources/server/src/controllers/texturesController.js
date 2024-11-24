import express from 'express';
import utils from '../utils.js';


export default {

    /**
     * @param req {express.Request}
     * @param res {express.Response}
     * @param next {express.NextFunction}
     */
    getTextures(req, res, next) {
        const texture = req.params.texture;
        return utils.sendFileContents('src/public/assets/textures/' + texture, res, next);
    },

}
