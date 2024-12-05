const express = require('express');
const mongoose = require('mongoose');

const app = express();

const url = "mongodb+srv://node:node@cluster0.myo6c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"



async function connect(){
    try{
        await mongoose.connect(url);
        console.log('connected to MongoDB');   
    }  catch (error){
         console.error(error);
    }
    
}


app.listen (8000,() => {
    console.log('Server listening on prot 8000');
    
})