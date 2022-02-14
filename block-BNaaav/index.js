var http = require('http');
var fs = require('fs');

var server = http.createServer(handleRequest);

function handleRequest(req,res) {
    console.log(req.url, req.method);
    if (req.method === 'GET' && req.url === '/') {
        res.setHeader('Content-Type','text/html');
        fs.createReadStream('./index.html').pipe(res);
    }
    if(req.url.split('.').pop() === 'css') {
        res.setHeader('Content-Type', 'text/css');
        fs.readFile('.' + req.url, (err, content) => {
          if(err) return console.log(err);
          res.end(content)
        })
    }
    if(req.url.split('.').pop() === 'jpg') {
        res.setHeader('Content-Type', 'image/jpg');
        fs.readFile('.' + req.url, (err, content) => {
          if(err) return console.log(err);
          res.end(content)
        })
    }
    if(req.url.split('.').pop() === 'js') {
        res.setHeader('Content-Type', 'application/javascript');
        fs.readFile('.' + req.url, (err, content) => {
          if(err) return console.log(err);
          res.end(content)
        })
    }
    
}

server.listen(5000, () => {
    console.log('server listening on port 5000')
})


