function pageNotFoundError(req, res) {
    res.status(404);
    res.sendFile(`./src/public/404.html`, { root: "./" });
}
function internalServerError(error, req, res, next) {
    console.error(`ERROR occurred: ${error.stack}`);
    res.status(500);
    res.sendFile(`./src/public/500.html`, { root: "./" });
}

export default {
    pageNotFoundError,
    internalServerError,
}

