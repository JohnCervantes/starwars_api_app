import React from "react";
import "./App.css";
import banner from "./assets/banner.jpg";
import Users from "./components/users";

function App() {
  return (
    <div className="App">
      <img src={banner} alt="starwars banner" />
      <br />
      <br />
      <Users />
    </div>
  );
}

export default App;
