import { readFile } from "fs";
import { INTERNAL_SERVER_ERROR } from "http-status-codes";
import { html } from "./contentTypes.js";

// export a function to red files and return a response
export function getFile(file, res) {
    readFile(`./${file}`, (error, data) => {
        if (error) {
            res.writeHead(INTERNAL_SERVER_ERROR, html);
            res.end("There was an error serving content!");
        }
        res.end(data);
    });
}
