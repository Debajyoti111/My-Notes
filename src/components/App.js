import React, {useState, useEffect} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";


function App() {
    let [notes, setNotes] = useState([]);

    useEffect(()=>{
        fetch("/api").then(response=>{
            return response.json();
        }).then(notesRecieved=>{
            setNotes(notesRecieved);
        })
    }, [notes]);

    return (
        <div>
          <Header />
          <CreateArea />
          {notes.map((note, i)=>{
              return <Note key={note._id} id={note._id} title={note.title} content={note.content} />;
          })}
          <Footer />
        </div>
  );
}

export default App;