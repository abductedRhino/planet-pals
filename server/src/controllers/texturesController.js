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
        if (!texture) {
            return next();
        }
        if (texture.endsWith('.jpeg') || texture.endsWith('.jpg')) {
            res.writeHead(200, {'Content-Type': 'image/jpeg'});
        } else if (texture.endsWith('.png')) {
            res.writeHead(200, {'Content-Type': 'image/png'});
        } else {
            return next();
        }
        return utils.getFile('public/assets/textures/' + texture, res, next);
    },

}
