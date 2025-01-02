//const express= require("express");                            
import express from "express";         //this syntax can be used instead of the line above because in package.json "type": "module"

const app = express();

app.listen(5000, ()=>{
    console.log("Server is running on port 5000");
})