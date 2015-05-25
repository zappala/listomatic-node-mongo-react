# list-o-matic Node.js server using mongodb

A simple list server to demonstrate a REST API that can be called from a front
end or a third-party application. Uses Node.js and Express, with
username/password for login, token-based authentication, and mongoose as an
ORM for mongodb.

## Dependencies

- [Node.js](https://nodejs.org/)
- [Express](http://expressjs.com/)
- [Mongoose](http://mongoosejs.com/)
- [mongoose-find-or-create](https://github.com/drudge/mongoose-findorcreate)
- [body-parser](https://github.com/expressjs/body-parser)
- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)
- [bcrypt-nodejs](https://github.com/ncb000gt/node.bcrypt.js)

## Installation

First install node.js:

```
sudo yum install nodejs npm
```

Next, install dependencies:

```
npm install
```

## Configure front end

Link the `public` directory to one of the available front ends. For example:

```
ln -s ../listomatic-react/public .
```

The available front ends are:

- [listomatic-react](https://github.com/zappala/listomatic-react)
- [listomatic-angular](https://github.com/zappala/listomatic-angular)
- [listomatic-ember](https://github.com/zappala/listomatic-ember)

## Run the app

```
node app.js
```

This will start a server on localhost, which you can visit at http://localhost:3000/

