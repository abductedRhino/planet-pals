import {readFile} from "fs";
import express from "express";

export default {

    /**
     * A function to red files and return a response
     * @param file {String}
     * @param res {express.Response}
     * @param next {express.NextFunction}
     */
    getFile(file, res, next) {
        readFile(`./${file}`, (error, data) => {
            if (error) {
                next(error);
            }
            res.end(data);
        });
    },

}
