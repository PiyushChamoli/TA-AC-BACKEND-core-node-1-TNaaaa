var http = require('http');
var fs = require('fs');

var server = http.createServer(handleRequest);

function handleRequest(req,res) {
    if (req.method === 'GET' && req.url === '/') {
        res.setHeader('Content-Type','text/html');
        fs.createReadStream('./index.html').pipe(res);
    } 
}

server.listen(5000, () => {
    console.log('server listening on port 5000')
})