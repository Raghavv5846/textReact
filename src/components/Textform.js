import React,{useState} from 'react'
export default function Textform(props) {
    const conUP =()=>{
        let newT=text.toUpperCase();
        setText(newT);
    }
    const ON=(e)=>{
        setText(""+e.target.value);

    }
    const conLo =()=>{
        let newT=text.toLowerCase();
        setText(newT);
    }
    const handleSpaces=()=>{
      let newtext=text.replace(/\s+/g,' ').trim();
      setText(newtext);
    }
    const handleCopy=()=>{
      let copiedtext=document.getElementById("textbox");
      copiedtext.select();
      navigator.clipboard.writeText(copiedtext.value);

    }
    const handleFirst=()=>{
      let arr=text.split(".");
      for (let i = 0; i < arr.length; i++) {
          arr[i]=arr[i][0].toUpperCase() + arr[i].substr(1);
      }
      let newarr=arr.join(".");
      setText(newarr);
    }
    const handleClear =()=>{
      setText("");
    }
    const [text,setText]=useState("")
  return (
    <>
  <div className="mb-3 " style={{color: props.mode==='light'?"black":"white"}} >
    
    <label htmlFor="exampleFormControlTextarea1" className={`form-label mt-2 fs-4 text-${props.text}`}><strong>{props.heading}</strong></label>
    <textarea className="form-control mt-3 text-" style={{backgroundImage: props.mode==='light'?"none":'linear-gradient(to right, #141e30, #243b55)',color: props.mode==='light'?"black":"white"}} id="textbox" rows="8" value={text} onChange={ON}></textarea>
    <button type="button" className={`btn btn-outline-primary mt-3 ms-3 text-${props.text}`} onClick={conUP}>Convert to Uppercase</button>
    <button type="button" className={`btn btn-outline-primary mt-3 ms-3 text-${props.text}`} onClick={conLo}>Convert to Lowercase</button>
    <button type="button" className={`btn btn-outline-primary mt-3 ms-3 text-${props.text}`} onClick={handleSpaces}>remove Extra Spaces</button>
    <button type="button" className={`btn btn-outline-primary mt-3 ms-3 text-${props.text}`} onClick={handleCopy}>Copy Text</button>
    <button type="button" className={`btn btn-outline-primary mt-3 ms-3 text-${props.text}`} onClick={handleFirst}>Capitalize First Word</button>
    <button type="button" className={`btn btn-outline-primary mt-3 ms-3 text-${props.text}`} onClick={handleClear}>Clear Text</button>



  </div>
  <div className="container" style={{color: props.mode==='light'?"black":"white"}}>
    <h2 className={`text-${props.text}`}> Text summary</h2><strong className={`fw-bolder text-${props.text}`}>Words:</strong>{text.split(" ").filter((e)=>{return e.length!==0}).length}
    <br/><strong className={`fw-bolder text-${props.text}`} >Characters:</strong>{text.length}
  </div>
  <div>

  <h2 className={` mt-3 text-${props.text}`}>Preview</h2>
  <p className={`text-${props.text}`}>{text}</p>
  </div>
  </>
  )
}
