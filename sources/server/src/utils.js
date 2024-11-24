import {readFile} from "fs";
import express from "express";

const contentTypes = {
    "js": {"Content-Type": "application/javascript"},
    "css": {"Content-Type": "text/css"},
    'jpeg': {'Content-Type': 'image/jpeg'},
    'jpg':{'Content-Type': 'image/jpeg'},
    'png': {'Content-Type': 'image/png'},
};

export default {

    /**
     * A function to read files and return a response
     * @param file {String}
     * @param res {express.Response}
     * @param next {express.NextFunction}
     */
    sendFileContents(file, res, next) {
        const fileExtension = file.split(".").pop();
        const contentType = contentTypes[fileExtension];
        if (!contentType) {
            return next(Error(`file: '${file}' does not relate to a contentType that can be sent.`));
        }
        readFile(file, (error, data) => {
            if (error) {
                return next(error);
            }
            res.writeHead(200, contentType);
            res.end(data);
        });
    },

}
