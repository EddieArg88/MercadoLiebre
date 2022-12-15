const express = require("express");

const app = express();

const path = require("path");

app.use(express.static("public"));

app.get("/" , (req, res) =>{
    res.sendFile(path.join(__dirname, "./views/home.html"));});
app.get("/login" , (req, res) =>{
        res.sendFile(path.join(__dirname, "./views/login.html"));});    
app.get("/register" , (req, res) =>{
    res.sendFile(path.join(__dirname, "./views/register.html"));});

    
const port= process.env.PORT || 3001
app.listen(3030, () =>
    app.listen(port, ()=>console.log("Servidor corriendo en el puerto ${port}")));