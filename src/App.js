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

  // async function fetchData(){

  //   setLoading(true);

  //   try {
  //     let response = await fetch(apiUrl);
  //     let output = await response.json();
  //     setCourses(output.data);
  //   } catch (error) {
  //     Toast.error("Something went wrong");
  //     // console.log("Something went wrong");
  //   }

  //   setLoading(false);
  // }

  useEffect( () => {
    async function fetchData(){

      setLoading(true);
  
      try {
        let response = await fetch(apiUrl);
        let output = await response.json();
        setCourses(output.data);
      } catch (error) {
        Toast.error("Something went wrong");
        // console.log("Something went wrong");
      }
  
      setLoading(false);
    }
    fetchData()
  }, []);

  return (
  <div className="min-h-screen flex flex-col">
    
    <div>
      <Navbar></Navbar>
    </div>

    <div className="bg-bgDark2">

      <div>
        <Filter filterData={filterData}></Filter>
      </div>

      <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
        {
          loading ? (<Spinner></Spinner>) : (<Cards courses={courses}></Cards>)
        }
      </div>

    </div>

  </div>);
};

export default App;
