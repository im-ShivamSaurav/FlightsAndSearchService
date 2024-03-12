const express = require ("express");
const { PORT } = require("./config/serverConfig")

const setupAndStartServer = async () => {
    const app = express();

    app.get("/",(req,res)=>{
        res.status(200).send("hello");
    })

    app.listen(PORT, ()=>{
        console.log(`Server started on ${PORT}`);
    })
}

setupAndStartServer();