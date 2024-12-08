import React,{useState}  from 'react'


export default function Textform(props) {
    const handleUpClick=()=>{
    // console.log("upper case was clicked");
    let newText=text.toUpperCase();
    setText(newText)
    props.showAlert("Upper case has been converted","success");

}
const handleloClick=()=>{
    // console.log("upper case was clicked");
    let newText=text.toLowerCase();
    setText(newText)
    props.showAlert("Lower case has been converted","success");

}

const handleOnChage=(event)=>{
    // console.log("on change");
    setText(event.target.value)
}
const handleSpeakClick = () => {
    if (text.trim() === "") {
        alert("Please enter some text.");
        return;
        
    }
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate=0.6;
    window.speechSynthesis.speak(utterance);
};

const [text, setText] = useState('');
     return (<>
    <div className="container" style={{color:props.mode==="dark"?"white":"#051a44"}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control"value={text} onChange={handleOnChage} style={{backgroundColor:props.mode==="dark"?"grey":"white",color:props.mode==="dark"?"white":"#051a44"}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1"  onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1"  onClick={handleloClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleSpeakClick} > Speak Text </button>

    </div>
    <div className="container my-2" style={{color:props.mode==="dark"?"white":"#051a44"}}>
        <h2>Your Text Summary</h2>
       
        <p>{text.split(" ").filter(word => word.trim() !== "").length} Words</p>
        <p>{text.length} Characters</p>
        <p>{0.008 * text.split(" ").length} Minutes Would Be taken To Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter text above to preview here"}</p>
        </div>
    </>
  )
}