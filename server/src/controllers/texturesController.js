import {getFile} from "../utils.js";

function getTextures(req, res, next) {
    const texture = req.params.texture;
    if (!texture) {
        return next();
    }
    if (texture.endsWith('.jpeg') || texture.endsWith('.jpg')) {
        res.writeHead(200, {"Content-Type": "image/jpeg"});
    } else if (texture.endsWith('.png')) {
        res.writeHead(200, {"Content-Type": "image/png"});
    } else {
        return next();
    }
    getFile("public/assets/textures/"+texture, res, next);
}

export default {
    getTextures,
}
