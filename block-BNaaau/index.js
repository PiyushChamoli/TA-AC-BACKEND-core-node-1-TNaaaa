var http = require('http');

// Question 1

http.createServer((req,res) => {
    console.log(req, res);
}).listen(5000, () => {
    console.log('Server listening on port 5000');
})

// Question 2

http.createServer((req,res) => {
    res.end('My first server in Nodejs')
}).listen(5100, () => {
    console.log('Server listening on port 5100');
})

// Question 3

http.createServer((req,res) => {
    console.log(req.headers['user-agent']);
    res.end(req.headers['user-agent']);
}).listen(5555, () => {
    console.log('Server listening on port 5555')
})

// Question 4

var server = http.createServer(handleRequest);

function handleRequest(req,res) {
    console.log(req.method, req.url);
    res.setHeader('Content-Type', 'text/plain');
    res.write(req.method + req.url);
    res.end();
}

server.listen(5566, () => {
    console.log('Server listening on port 5566');
})

// Question 5 - NOT WORKING

var server = http.createServer(handleRequest);

function handleRequest(req,res) {
    res.setHeader('Content-Type','application/javascript')
    res.end(req.headers);
}

server.listen(7000, () => {
    console.log('Server listening on port 7000')
})

// Question 6

var server = http.createServer(handleRequest);

function handleRequest(req,res) {
    res.statusCode = 202;
    res.end();
}

server.listen(3333, () => {
    console.log('server listening on port 3333');
})

// Question 7

var server = http.createServer(handleRequest);

function handleRequest(req,res) {
    res.setHeader('Content-Type', 'text/html');
    res.end(`<h3>Welcome to altcampus</h3>`);
}

server.listen(8000, () => {
    console.log('server listening on port 8000');
})

// Question 8

var server = http.createServer(handleRequest);

function handleRequest(req,res) {
    res.writeHead(200, {'Content-Type':'text/html'});
    res.end(`<h3>Welcome to altcampus</h3>`);
}

server.listen(8000, () => {
    console.log('server listening on port 8000');
})

// Question 9

var server = http.createServer(handleRequest);

function handleRequest(req,res) {
    res.setHeader('Content-Type','application/json');
    res.write(`{success: true, message: 'Welcome to Nodejs'}`);
    res.end();
}

server.listen(8888, () => {
    console.log('server listening on port 8888');
})

// Question 10

var server = http.createServer(handleRequest);

function handleRequest(req,res) {
    console.log(req.method);
    if(req.method === 'POST' && req.url === '/index') {
        res.setHeader('Content-Type', 'text/html');
        res.end(`<h2>posted for first time</h2>`);
    }
}

server.listen(5050, () => {
    console.log('server listening on port 5050');
})

// Question 11

var server = http.createServer(handleRequest);

function handleRequest(req,res) {
    if (req.method === 'GET' && req.url === '/') {
        res.setHeader('Content-Type','text/plain');
        res.end('Piyush Chamoli')
    }else if (req.method === 'GET' && req.url === '/about') {
        res.setHeader('Content-Type','text/html');
        res.end('<h2>Piyush Chamoli</h2>')
    }else {
        res.statusCode = 404;
        res.end('Error');
    }
}

server.listen(2345, () => {
    console.log('server listening on port 2345');
})

// Question 12

var server = http.createServer(handleRequest);

function handleRequest(req,res) {
    if (req.method ==='GET' && req.url === '/users') {
        res.setHeader('Content-Type', 'text/html');
        res.end(`
        <form>
            <input type="text" placeholder="name">
            <input type="email" placeholder="email">
        </form>
        `);
    }else if(req.method === 'POST' && req.url === '/users') {
        res.end('Posted for the second time');
    }
}

server.listen(5151, () => {
    console.log('server listening on port 5151');
})

// Question 13

var url = require('url');
var server = http.createServer(handleRequest);

function handleRequest(req,res) {
    let parsedURL = url.parse(req.url);
    console.log('parsed' + parsedURL.pathname);
    console.log('notparsed' + req.url);
    res.setHeader('Content-Type','application/json');
    res.end(parsedURL.query);
}

server.listen(8181, () => {
    console.log('server listening on port 8181');
})

//xyz