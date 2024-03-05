import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import {apiUrl, filterData} from "./data"
import { toast } from "react-toastify";
import Spinner from "./components/Spinner";

const App = () => {
  let Toast = toast;
  
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchData(){

    setLoading(true);

    try {
      let response = await fetch(apiUrl);
      let output = await response.json();
      setCourses(output);
    } catch (error) {
      Toast.error("Something went wrong");
      // console.log("Something went wrong");
    }

    setLoading(false);
  }

  useEffect( () => fetchData(), []);

  return (
  <div>
    
    <div>
      <Navbar></Navbar>
    </div>

    <div>
      <Filter filterData={filterData}></Filter>
    </div>

    <div>
      {
        loading ? (<Spinner></Spinner>) : (<Cards></Cards>)
      }
    </div>

  </div>);
};

export default App;
