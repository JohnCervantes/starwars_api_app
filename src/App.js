import React from "react";
import "./App.css";
import banner from "./assets/banner.jpg";
import Users from "./components/users";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App Site">
      <div className="Site-content">
        <img src={banner} alt="starwars banner" />
        <br />
        <br />
        <Users />
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
