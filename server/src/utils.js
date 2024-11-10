import { readFile } from "fs";
import { html } from "./contentTypes.js";

// export a function to red files and return a response
export function getFile(file, res, next) {
    readFile(`./${file}`, (error, data) => {
        if (error) {
            next(error);
        }
        res.end(data);
    });
}
