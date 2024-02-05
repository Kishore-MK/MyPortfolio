import './App.css';
import React from "react";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Navbar from './pages/home/navbar';
import Homescreen from "./pages/home/homescreen";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Navbar />
          <Homescreen/>
          <Routes>
            <Route path="/" element={<Homescreen/>}></Route>
            <Route path="*" element={<div>404 Not found!</div>}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
