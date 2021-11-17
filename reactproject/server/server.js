//import the modules
//require() function used to import the modules
const express = require("express");
const mongodb = require("mongodb");
const cors = require("cors");
const jsonwebtoken = require("jsonwebtoken");
// const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.use(express.json());

app.use(cors());


const miniproject = mongodb.MongoClient;

const obj = require("./token");

app.post("/login", (req, res) => {
    miniproject.connect("mongodb+srv://admin-1234:admin-1234@usercluster.ygl3d.mongodb.net/reactproject?retryWrites=true&w=majority", (err, connection) => {
        if (err) throw err;
        else {
            const db = connection.db("reactproject");
            db.collection("user-data")
                .find({ "email": req.body.email, "password": req.body.password })
                .toArray((err, array) => {
                    if (err) throw err;
                    else {
                        if (array.length > 0) {
                            obj.token = jsonwebtoken.sign(
                                { "email": req.body.email, "password": req.body.password },
                                "miniproject",
                                { expiresIn: '30d' }
                            );
                            res.status(200).send({ "login": "success", "token": obj.token });
                        } else {
                            res.send({ "login": "fail" });
                        }
                    }

                })
        }

    });
});


const checkTokens = (req,res,next)=>{
    let allHeaders = req.headers;
    if(allHeaders.token === obj.token){
        next();
    }else{
        res.send({"msg":"authentication failed"});
    }
};


app.get("/catgory/:item",[checkTokens],(req,res)=>{
    
    miniproject.connect("mongodb+srv://admin-1234:admin-1234@usercluster.ygl3d.mongodb.net/reactproject?retryWrites=true&w=majority",(err,connection)=>{
        if(err) throw err;
        else{
            const db = connection.db("reactproject");
            db.collection(req.params.item).find().toArray((err,array)=>{
                if(err) throw err;
                else{
                    res.send(array);
                }
            })
        }
    });
});




let port = 8080 || 1234;

app.listen(port, () => {
    console.log("server listening the port number 8080");
});




