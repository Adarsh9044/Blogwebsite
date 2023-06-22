import React from "react";
import './App.css';
//import { db } from './firebaseconfig';
import Addblog from "./components/Addblog";
import Blogdisplay from "./components/Blogdisplay";

function App() {
  return (
    <div className="App">
      <div>
       <Blogdisplay/> 
      </div>

      <div>
        <Addblog/>
      </div>
    </div>
  );
};

export default App;
