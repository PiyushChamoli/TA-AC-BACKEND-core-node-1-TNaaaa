console.log('Weolcome to Nodejs');

var os = require('os');
var {readFile, readFileSync, unlink} = require('fs');

console.log(
    os.cpus().length,
    os.freemem(),
    os.uptime(),
    os.version()
);

let safeBuffer = Buffer.alloc(12);
let unsafeBuffer = Buffer.allocUnsafe(12);
safeBuffer.write('Hello World!');
unsafeBuffer.write('Hello World!');

console.log(safeBuffer.toString(), unsafeBuffer.toString());

//Blocking Code

for (let i=0;i<10000;i++) {
    //todo task
}

readFileSync('./app');

//NonBlocking Code

setTimeout(() => {},1000);

readFile('./app');
