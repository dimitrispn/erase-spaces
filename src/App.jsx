import { useState } from "react";

function App() {
  const [text, setText] = useState("");


  return (
    <div className="text-center m-5 ">

<div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">Delete Spaces</h1>
        <p className="fs-4 text-center p-5">Put your text in the input field and it will be appeared without spaces. <br />
        Click the "copy" button to copy to clipboard the result.</p>
        
      </div>
    
      <input
        type="text" onChange={(e) => {
          setText(e.target.value.split(" ").join("").replaceAll("\t", ""));
        }}
      />
      <div className="m-3 bg-info text-light fs-2 text w-25 mx-auto">{text}</div>
      
      <button className="btn btn-primary" onClick={()=>{
        navigator.clipboard.writeText(text)
      }}>Copy</button>
    </div>
  );
}

export default App;
