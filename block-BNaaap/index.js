var http = require('http');

var server = http.createServer(handleRequest);

function handleRequest(req,res) {
    console.log(req.method);
    res.statusCode = 201;
    res.setHeader('Content-Type', 'text/html');
    res.end(`<h1>Welcome to AltCampus</h1>`);
}

server.listen(4444,() => console.log(
    'Listening on port 4444'
))