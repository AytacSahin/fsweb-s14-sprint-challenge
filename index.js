// Server'ı buradan başlatın

const server = require("./api/server.js");

const PORT = process.env.PORT || 9000;

server.listen(PORT, (req, res, next) => {
    console.log(`Server listening on ${PORT}...`)
})

