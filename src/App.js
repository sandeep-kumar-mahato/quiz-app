import React from "react";
import QuizApp from "./components/QuizApp";
import Navbar from "./components/Navbar";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <QuizApp />
    </div>
  );
};

export default App;
