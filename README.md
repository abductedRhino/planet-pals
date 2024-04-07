# Agile web development

## Setup

### Install nvm

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

install nvm: https://github.com/nvm-sh/nvm/blob/master/README.md#install--update-script

compare Node versions: https://nodejs.org/en/download/

### Node hello world

```javascript
// hello.js
console.log('Hello, Universe!');
```

```bash
node hello
Hello, Universe!
```

```javascript
//messages.js
let messages = [
  something
  more messages
  important message
];
```
```bash
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

## Building a static Web App
