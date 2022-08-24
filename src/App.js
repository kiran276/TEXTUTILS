import logo from './logo.svg';
import React, { useState } from 'react'
import { BrowserRouter, HashRouter,Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import Alert from './components/Alert';

function App() {
  const[mode,setMode]=useState('light');
  const[text,setText]=useState('Dark Mode');
  const[alert,setAlert]=useState(null);

  function showAlert (message,type){
    setAlert({
      msg:message,
      type:type
    })
   setTimeout(() => {
    showAlert(null);
  }, 1500);
  }

  const toggleMode = ()=>{
    if(mode==='light')
        {
      setMode('dark');
      showAlert("Dark Mode Enabled","success");
      document.body.style.backgroundColor='grey';
      setText('Light Mode');
        }
    else
        {
      setMode('light');
      setText('Dark Mode');
      showAlert("Light Mode Enabled","success");
      document.body.style.backgroundColor='white';
        }
  }
  return (
   <>

    <Navbar title ="TextUtils" tab1="MyHome"  text={text} mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}></Alert>
     
      {/* <div className="container"> */}
       {/* <About/>  */}
      {/* <Textform alert={showAlert} heading="Enter the text for analysis" mode={mode} /> */}
                {/* </div> */}
                <div className="container">
          <Routes>
            <Route path="/about" element={<About />}></Route>
            <Route path="/" element={<Textform heading="Enter text to analyze"  mode={mode} alert={showAlert} />}></Route>
          </Routes>
    
        </div>
      
     
    </>
  );
}

export default App;
