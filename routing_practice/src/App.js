import { useParams } from 'react-router';
import './App.css';
import React from 'react';
import Home from "./components/Home";
import DisplayIntOrStr from "./components/DisplayIntOrStr";
import ColorDisplay from './components/ColorDisplay';
import {BrowserRouter, Routes, Route} from 'react-router-dom';



function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route path="/home" element={<Home/>}/>
          <Route path="/:int" element={<DisplayIntOrStr/>}/>
          <Route path="/:word/:fontColor/:backgroundColor" element={<ColorDisplay/>}/>
        </Routes>
      </BrowserRouter>
    </div>
    
  );
};

export default App;
