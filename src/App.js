import React from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";

const App = () => {

  return (
  <div>
    
    <div>
      <Navbar></Navbar>
    </div>

    <div>
      <Filter></Filter>
    </div>

    <div>
      <Cards></Cards>
    </div>

  </div>);
};

export default App;
