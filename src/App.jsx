import { useState } from "react";
import "./App.css";
import NavbarComponent from "./components/navbarComponent";
import FooterComponent from "./components/footerComponent";
import MainComponent from "./components/MainComponent";

function App() {
  return (
    <>
      <div className="h-screen flex flex-col items-center justify-between">
        <NavbarComponent />
        <MainComponent />
        <FooterComponent />
      </div>
    </>
  );
}

export default App;
