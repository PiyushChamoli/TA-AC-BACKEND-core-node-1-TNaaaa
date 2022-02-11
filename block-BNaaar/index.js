var http = require('http');
var url = require('url');

var server = http.createServer(handleRequest);

function handleRequest(req,res) {
    let parsedURL = url.parse(req.url);
    let pathName = parsedURL.pathname;
    console.log(req.method, pathName);
    if ((req.method === 'GET') && (req.url === pathName)) {
        res.setHeader('Content-Type', 'text/plain');
        res.write('Welcome to homepage');
        res.end();
    }else if ((req.method === 'GET') && (req.url === pathName)){
        res.setHeader('Content-Type', 'text/html');
        res.write('<h2>This is all about NodeJS</h2>');
        res.end();
    }else if ((req.method === 'POST') && (req.url === pathName)) {
        res.writeHead(201,{'Content-Type':'application/json'});
        res.end(`{message: this is a post request}`);
    }
}

server.listen(5000, () => {
    console.log('Listening on server 5000')
})