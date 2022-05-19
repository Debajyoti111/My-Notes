import React, {useEffect, useState} from "react";

function CreateArea() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    function updateTitle(e){
        setTitle(e.target.value);
    }
    function updateContent(e){
        setContent(e.target.value);
    }
    function makePost(e)
    {
        e.preventDefault();
        setTitle("");
        setContent("");
        fetch("http://localhost:5000/api/posts", {
            method: "POST",
            headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
            body:JSON.stringify({title, content})
        }).then(()=>{
            console.log("post successful");
        })
    }
    return (
        <div>
          <form onSubmit={makePost}>
            <input name="title" placeholder="Title" value={title} onChange={updateTitle}/>
            <textarea name="content" placeholder="Take a note..." rows="3" value={content} onChange={updateContent} />
            <button type="submit">Add</button>
          </form>
        </div>
    );
}

export default CreateArea;
