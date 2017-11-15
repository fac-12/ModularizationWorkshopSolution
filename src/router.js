const handlers = require('./handlers.js');

const router = (req, res) => {
    const url = req.url;
    console.log("url: "+url);
    if (url === '/' || url === '/fac') {
        handlers.facHomeHandler(req,res);
    } else if (url === '/dwyl') {
        handlers.dwylHomeHandler(req,res);
    } else if (url.indexOf('/public/') !== -1) {
        handlers.staticFileHandler(req,res,url);
    } else if (url.indexOf('api/repos') !== -1) {
        handlers.apiHandler(req,res,url);
    } else {
        res.writeHead(404, {
            'content-type': 'text/plain'
        });
        res.end('404 server error');
    }
};

module.exports = router;