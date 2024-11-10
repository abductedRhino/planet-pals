exports.pageNotFoundError = (req, res) => {
    let errorCode = 404;
    res.status(errorCode);
    res.sendFile(`./public/404.html`, { root: "./" });
};
exports.internalServerError = (error, req, res, next) => {
    let errorCode = 500;
    console.error(`ERROR occurred: ${error.stack}`);
    res.status(errorCode);
    res.sendFile(`./public/500.html`, { root: "./" });
};

