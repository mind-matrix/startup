const http = require('http');
const express = require('express');
const compression = require('compression');
const WebSocket = require('ws');
const multer = require('multer');
const package = require('./package.json');

const appinfo = {
    public: {
        name: package.name,
        title: package.title,
        version: package.version,
        description: package.description,
        author: package.author,
        license: package.license
    },
    private: package
};

const parser = multer();
const app = express();
app.use(compression());
app.use(express.static('public'));

const httpserver = http.createServer(app);

const wsserver = new WebSocket.Server({ server: httpserver });

/* HTTP Endpoints */
app.get('/appinfo', (req, res) => {
    res.end(JSON.stringify(appinfo.public));
});

/* WebSocket Endpoints */
/* Simple Echo WebSocket Server */
wsserver.on('connection', (ws) => {
    ws.on('message', (message) => {
        ws.send(message);
    });
});

exports.listen = function (port, callback = (address) => {}) {
    httpserver.listen(port, () => {
        callback(httpserver.address());
    });
};
exports.close = function (callback = () => {}) {
    httpserver.close(callback);
};