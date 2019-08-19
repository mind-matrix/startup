const server = require('./server');

server.listen(8080, (address) => {
    console.log(`Server running at http://localhost:${address.port}`);
});