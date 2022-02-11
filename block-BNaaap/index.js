var http = require('http');

var server = http.createServer(handleRequest);

function handleRequest(req,res) {
    res.statusCode = 201;
    res.setHeader('Content-Type', 'text/html');
    res.end();
}

server.listen(4444,() => console.log(
    'Listening on port 4444'
))