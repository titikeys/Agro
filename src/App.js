import React, { useState } from "react";
import Hero from "./components/Hero";
import Infosection from "./components/Infosection";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { homeObjone, homeObjthree, homeObjtwo } from "./data/InfoData";
import { SliderData } from "./data/SliderData";
import GlobalStyle from "./globalstyles";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Hero slides={SliderData} />
      <Infosection {...homeObjone} />
      <Infosection {...homeObjtwo} />
      <Infosection {...homeObjthree} />
    </>
  );
}

export default App;
