const express = require("express");
const mongodb = require("mongodb");
const cors = require("cors");

const app = express();

app.use(express.json());

app.use(cors());

const ashokit = mongodb.MongoClient;

app.get("/products",(req,res)=>{
    ashokit.connect("mongodb+srv://admin:admin@usercluster.ygl3d.mongodb.net/Mern?retryWrites=true&w=majority",
    (err,connection)=>{
        if (err) throw err;
        else{
            const db = connection.db("Mern");
            db.collection("products").find().toArray((err,array)=>{
                if (err) throw err;
                else{
                    res.send(array);

                }
            })
        }
    });
});


app.listen(8080,()=>{
    console.log("server listing the port number 8080")
});

