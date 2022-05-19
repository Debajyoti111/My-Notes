const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/notesDB", {useNewUrlParser:true});
const notesSchema = mongoose.Schema({
    title: String,
    content: String
});

const Note = mongoose.model("note", notesSchema);

app.use(cors());
app.use(bodyParser.json());

app.listen(5000, ()=>{
    console.log("Server is listening to PORT 5000");
})

app.get("/api", (req,res)=>{
    Note.find((error, notesObtained)=>{
        if(error)
        {
            console.log(error);
        }
        else{
            let JsonResponse = JSON.parse(JSON.stringify(notesObtained));
            res.json(JsonResponse);
        }
    })
})

app.post("/api/posts", (req, res)=>{
    const note = new Note(req.body);
    note.save();
})

app.delete("/api/delete", (req, res)=>{
    Note.deleteOne({_id:req.body.id}, (err)=>{
        if(err) console.log(err);
        else console.log("Successfully deleted");
    });
})