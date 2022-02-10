var url = require('url');
const parsedURL = url.parse("https://blog.altcampus.io:80/students/register?name=altcampus&gender=male", true);

console.log(parsedURL);
console.log(parsedURL.pathname);
console.log(parsedURL.query);
console.log(parsedURL.host);
console.log(parsedURL.protocol);
