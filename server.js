const express = require ("express");
const app = express ();
const cors = require('cors');
const axios = require("axios")
app.use(express.json());
const db_connect = require("./connect_db");
app.use(cors({origin:true}));
require("dotenv").config();
app.use("/files",express.static("files"));
require("dotenv").config();
//connexion db
db_connect();


//routes
app.use("/user", require("./routes/user"));


//server
const PORT = process.env.PORT ;
app.listen( PORT , 
    (err) => err?console.log(err): console.log(`server is running on ${PORT}!`)
    );
