import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Footer, Logo } from "./components";

function App() {
  return (
    <div className="App">
      <Logo />
      <main className="app-content" />
      <Footer />
    </div>
  );
}

export default App;
