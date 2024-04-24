"use strict";

const fs = require("fs");
const contentTypes = {
  html: {
    "Content-Type": "text/html"
  },
  text: {
    "Content-Type": "text/plain"
  },
  js: {
    "Content-Type": "text/js"
  },
  jpg: {
    "Content-Type": "image/jpg"
  },
  png: {
    "Content-Type": "image/png"
  },
  css: {
    "Content-Type": "text/css"
  }
};
exports.getFile = (file, res) => {
  fs.readFile(`./${file}`, (error, data) => {
    if (error) {
      console.error(error)
      res.writeHead(500, contentTypes.html);
      res.end("There was an error serving content!");
    }
    res.end(data);
  });
};
exports.contentTypes = contentTypes
