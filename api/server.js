// serverı buraya yazın ve index.js require yazın

const express = require("express");

const ProjectRouter = require("./project/router");
const ResourceRouter = require("./resource/router");
const TaskRouter = require("./task/router");

const server = express();

server.get("/", (req, res, next) => {
    res.send("<h1>Challenge Projesine Hoşgeldiniz...</h1></br><h2>Bu projede, bu hafta öğrendiğin bilgilerin tamamını kullanman gerekecek!!</h2>")
})

// server.use("/api/project", ProjectRouter);
// server.use("/api/resource", ResourceRouter);
// server.use("/api/task", TaskRouter);

module.exports = server;