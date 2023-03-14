import React,{useState} from 'react'
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  const [mode,setMode]=useState('light');
  const [text,setText]=useState('dark');
  const toggleMode=()=>{
    if(mode==='light'){
      setText('light');
      setMode('dark');
      document.body.style.backgroundImage="linear-gradient(to right, #141e30, #243b55)";
      // document.body.style.backgroundColor="#343a40";
    }else{
      setText('dark');
      setMode('light');
      document.body.style.backgroundImage="none";
      document.body.style.backgroundColor="white";

    }

  }
  return (
    <>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} text={text}/>
    <div className="container">
    <Textform heading="Enter text" value="Write here..." text={text} mode={mode}/>
    </div>
    </>
    
  );
}

export default App;
