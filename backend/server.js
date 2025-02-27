const express = require('express');

const notes = require('./data/notes');
const dotenv = require('dotenv');

const app = express();

dotenv.config();


// creation of API ..
app.get('/',(req,res) =>{
    res.send("API IS RUNNING SUCCESFULLY");
})

app.get('/api/notes',(req,res)=>{
    res.json(notes);
})


app.get("/api/notes/:id",(req,res)=>{
    const note = notes.find((n) => n._id = req.params.id);
    res.send(note);

})



const PORT = process.env.PORT || 5000;


// creation on web server

app.listen(PORT,console.log(`server is listening at port ${PORT}`));