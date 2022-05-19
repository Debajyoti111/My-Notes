import React from "react";

function makeDeleteRequest(e)
{
  fetch("/api/delete", {
    method:"DELETE",
    headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
    body:JSON.stringify({id:e.target.value})
  }).then(()=>{
    console.log("Deletion Successful!");
  })
}

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button value={props.id} onClick={makeDeleteRequest}>DELETE</button>
    </div>
  );
}

export default Note;
