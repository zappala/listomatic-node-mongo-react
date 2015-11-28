# list-o-matic Node.js server using mongodb and React

A simple list server to demonstrate a REST API that can be called from a front
end or a third-party application. Uses Node.js and Express, with
username/password for login, token-based authentication, and mongoose as an
ORM for mongodb. The Front end uses React.

## Installation

First install node.js:

```
sudo yum install nodejs npm
```

Next, install dependencies:

```
npm install
```

## Build

Run webpack:

```
webpack
```

## Run the app

```
node server.js
```

This will start a server on localhost, which you can visit at http://localhost:3000/

