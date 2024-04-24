npm install --save express
npm install --save ejs
npm install --save express-ejs-layouts
npm install --save-dev nodemon
jq '.scripts.start="nodemon ."' package.json | sponge package.json
