import './App.css';
import AboutUs from "./components/aboutUs/aboutUs";
import React from "react";
import Profession from "./components/profession/profession";
import Hobby from "./components/Hobby/Hobby";
import Menu from "./components/aboutUs/parts/menu/menu";

function App() {
  return (
    <div className="App">
      <Menu/>
      <AboutUs />
      <Profession/>
      <Hobby/>
    </div>
  );
}

export default App;
