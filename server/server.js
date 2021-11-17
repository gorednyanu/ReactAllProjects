// node js

//import the modules
//require() function, used to import the modules
const express = require("express");
const mongodb = require("mongodb");
const cors = require("cors");

//create the rest object
const app = express();
//where "app" is the rest object
//where "app" object used to devlope the rest services

//set the MIME type
app.use(express.json());

//enable the ports communication
//enable the cors policy
app.use(cors());


//create the mongodb client
//this client helps to mongodb database
const ashokit = mongodb.MongoClient;

//where "ashokit" is the client object
//where "ashokit" object helps to connect to the mongodb database


//create the rest api
app.get("/products",(req,res)=>{
    ashokit.connect(`mongodb+srv://admin:admin@usercluster.ygl3d.mongodb.net/Mern?
    retryWrites=true&w=majority`, (err,connection)=>{
        if (err) throw err;
        else{
            const db  = connection.db("Mern");
            db.collection("products").find().toArray((err,array)=>{
                if (err) throw err;
                else{
                    res.send(array);
                }
            });
        }
    });
});

app.listen(8080,()=>{
    console.log("server listening the port no 8080")
});
























