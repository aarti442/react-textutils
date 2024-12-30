
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React,{useState} from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const[mode,setMode] = useState('light');
  const[colorpalet,setcolorpalet] = useState(0);
  const [activeColor, setActiveColor] = useState('#0d6efd');

 const changeColor = (color) =>{
    if(mode === 'dark'){
      document.body.style.backgroundColor = color;
      setcolorpalet({
        color : 'white',
        backgroundColor : color
      })
      setActiveColor(color);
    }
    
 }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'black';
    }else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
    }
  }
  return (

   <Router>
    <Navbar title="TextUtils" abouttitle="About TextUtils" mode={mode} changeColor={changeColor} toggleMode={toggleMode} activeColor={activeColor}/>
    <Routes>
        <Route
          path="/"
          element={<Textform heading="Enter your details" mode={mode} activeColor={activeColor} />}
        />
        <Route path="/about" element={<About mode={mode} colorpalet={colorpalet} />} />
      </Routes>
 
    </Router>
  );
}

export default App;
