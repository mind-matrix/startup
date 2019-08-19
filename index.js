require('dotenv').config();
const server = require('./server');

server.listen(process.env.PORT, (address) => {
    console.log(`Server running at http://localhost:${address.port}`);
});