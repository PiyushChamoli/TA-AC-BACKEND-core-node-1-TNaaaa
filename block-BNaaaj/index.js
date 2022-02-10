var os = require('os');
var {readFile, unlink} = require('fs');

// console.log(
//     os.cpus().length,
//     os.freemem(),
//     os.uptime(),
//     os.version()
// );

let safeBuffer = Buffer.alloc(12);
let unsafeBuffer = Buffer.allocUnsafe(12);

console.log(safeBuffer.toString(), unsafeBuffer.toString());

//Blocking Code

for (let i=0;i<10000;i++) {
    //todo task
}

//NonBlocking Code

setTimeout(() => {},1000);

