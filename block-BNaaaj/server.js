var {parse} = require('url');

let parsedURL = parse(`https://airindia.com/fares/calculate?from=delhi&to=detroit`,true);

console.log(
    parsedURL.query,
    parsedURL.pathname,
    parsedURL.protocol,
);
