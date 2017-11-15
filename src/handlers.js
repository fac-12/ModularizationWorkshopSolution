var fs = require('fs');
var path = require('path');
const repos = require('./repos.json');


const facHomeHandler = (req, res) => {
    fs.readFile(path.join(__dirname, '..', 'public', 'fac.html'), 'utf8', (err, file) => {
        /* istanbul ignore if */
        if (err) {
            res.writeHead(500, {
                'content-type': 'text/plain'
            });
            res.end('server error');
        } else {
            res.writeHead(200, {
                'content-type': 'text/html'
            });
            res.end(file);
        }
    });
}

const dwylHomeHandler = (req, res) => {
    fs.readFile(path.join(__dirname, '..', 'public', 'dwyl.html'), 'utf8', (err, file) => {
        /* istanbul ignore if */
        if (err) {
            res.writeHead(500, {
                'content-type': 'text/plain'
            });
            res.end('server error');
        } else {
            res.writeHead(200, {
                'content-type': 'text/html'
            });
            res.end(file);
        }
    });
}

const staticFileHandler = (req, res, url) => {
    var extensionType = {
        html: 'text/html',
        css: 'text/css',
        js: 'application/javascript',
        ico: 'image/x-icon'
    };
    var extension = url.split('.')[1];
    var filePath = path.join(__dirname, '..', url);
    console.log("file path: "+filePath);
    fs.readFile(filePath, function (error, file) {
        if (error) {
            res.end(error);
        }
        res.writeHead(200, 'Content-Type: ' + extensionType[extension]);
        res.end(file);
    });
}

const apiHandler = (req, res, url) => {
    var which = url.split('/').slice(-1)[0];
    res.writeHead(200, {
        'content-type': 'application/json'
    });
    res.end(JSON.stringify(repos[which]));
}


module.exports = {
    facHomeHandler,
    dwylHomeHandler,
    apiHandler,
    staticFileHandler
};