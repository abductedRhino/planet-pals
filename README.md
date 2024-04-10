# Agile web development

## 00 Setup

### Install nvm

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

install nvm: <https://github.com/nvm-sh/nvm/blob/master/README.md#install--update-script>

compare Node versions: <https://nodejs.org/en/download/>

### Node hello world

#### Run a .js file with node

Create a file `hello.js`. The file just prints to system out.

```javascript
// hello.js
console.log('Hello, Universe!');
```

In the same directory, run the file with `node`.

```console
node hello
Hello, Universe!
```

### Node REPL

#### Load a file into interactive node

Create a file `messages.js`. The file contains an array called messages.

```javascript
//messages.js
let messages = [
  something
  more messages
  important message
];
```

Run `node` in the same direcory to start the REPL. `.load messages.js` gives access to the array messages.
Print the array. Then run `.save positive_messages.js` to save all commands to a file.

```console
node
Welcome to Node.js v20.12.1.
Type ".help" for more information.
> .load messages.js
let messages = [
  "something",
  "more messages",
  "important message"
];


undefined
> messages.forEach(m=>console.log(m));
something
more messages
important message
undefined
> .save positive_messages.js
Session saved to: positive_messages.js
> .exit
```

```javascript
// positive_messages.js
let messages = [
  "something",
  "more messages",
  "important message"
];


messages.forEach(m=>console.log(m));
```

## 01 Building a static Web App

### Node module

Append to the Node.js exports object. The exports object is a property of the module object.

```javascript
// messages.js
exports.messages = [
  'You are great!',
  'You can accomplish anything!',
  'Success is in your future!'
];
```

The module can be used like this.

```javascript
const messages_module = require('./messages');
messages_module.messages.forEach(m => console.log(m));
```

### Npm

Run `npm init` and `npm install cities --save`.

```javascript
// main.js
const cities = require('cities');
var my_city = cities.zip_lookup('10016');
console.log(my_city);
```

Run with `node main.js`

```console
[me@thinkpad recipe_connection]$ node main.js
{
  zipcode: '10016',
  state_abbr: 'NY',
  latitude: '40.746180',
  longitude: '-73.97759',
  city: 'New York',
  state: 'New York'
}
[me@thinkpad recipe_connection]$ 
```

### Lesson 4

Install `http` and `http-status-codes` (deprecated?). Create a simple web server and start it with `node main.js`.

```javascript
const port = 3000
const http = require('http');
const http_status_codes = require('http-status-codes');
const app = http.createServer((req, res) => {
  console.log('Received an incoming request!');
  res.writeHead(http_status_codes.OK, {
    'Content-Type': 'text/html'
  });
  let response_message = '<h1>Hello, Universe!</h1>';
  res.write(response_message);
  res.end();
  console.log(`Sent a response : ${response_message}`);
})

app.listen(port);
console.log(`Listening on port ${port}`);

```

```console
[me@thinkpad simple_server]$ node main.js
Listening on port 3000
Received an incoming request!
Sent a response : <h1>Hello, Universe!</h1>
Received an incoming request!
Sent a response : <h1>Hello, Universe!</h1>
^C
[me@thinkpad simple_server]$ 
```
