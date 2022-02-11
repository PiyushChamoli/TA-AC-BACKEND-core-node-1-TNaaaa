var http = require('http');

// http.createServer(
//     (request,response) => {}
// ).listen(4000);


var server = http.createServer(handleRequest);

function handleRequest(req,res) {
    res.end('Welcome');
}

server.listen(4000, () => {
    console.log('Listening on port 4000')
});