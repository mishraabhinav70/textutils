import React,{useState} from "react";

export default function TextForm(prop) {
    const handeleUpclick = ()=>{
        let NewText = text.toUpperCase();
        setText(NewText)
    }

    const handeleOnChange = (Event)=>{
        setText(Event.target.value)
    }

    const[text,setText] = useState("enter text here");

  return (
    <div>
      <h1>{prop.heading}</h1>
      <div className="mb-3">
        <label htmlFor="myBox" className="form-label">
          Textarea
        </label>
        <textarea className="form-control" value={text} onChange={handeleOnChange} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primery" onClick={handeleUpclick}>Convert to upper case</button>
    </div>
  );
}

