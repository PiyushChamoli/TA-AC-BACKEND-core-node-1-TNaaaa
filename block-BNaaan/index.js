var http = require('http');

var server = http.createServer(handleRequest);

function handleRequest(req,res) {
    console.log(
        req.url,
        req.method,
        req.headers
    );
}

server.listen(3000, () => console.log(
    'Listening on port 3000'
));

