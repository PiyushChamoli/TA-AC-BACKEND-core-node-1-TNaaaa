var {readFile,readFileSync} = require('fs');

readFile('./content.md', (err,content) => {
    console.log(content.toString());
})

let content = readFileSync('./content.md', 'utf8');
console.log(content);

console.time('task1');
for (let i=0;i<10000;i++) {
    //do some task
}
console.timeEnd('task1');

console.time('task2');
setTimeout(() => {
    console.log('async task');
    console.timeEnd('task2');
},2000);

let buff1 = Buffer.alloc(10);
buff1.write('Welcome to Buffer');
console.log(buff1.toString());