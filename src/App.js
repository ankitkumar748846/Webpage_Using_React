 import React, { useState } from "react";
 import {apiUrl, filterData} from "./data";
 import Navbar from "./Components/Navbar";
 import Filter from "./Components/Filter";
 import Cards from "./Components/Cards";
 import {toast}  from "react-toastify";
 import {useEffect} from "react";
 import Spinner from "./Components/Spinner"
const App = () => {
  const [courses , setCourses] = useState(null);
  const [loading , setLoading] = useState(true);


    async function fetchData(){
      setLoading(true);
      try 
      {
        const response = await fetch(apiUrl);
        const output = await response.json();
        setCourses(output.data);

      }
      catch(error)
      {
        toast.error("Something went wrong");
      }
      setLoading(false);
    }
    useEffect(()=>{
      fetchData();
    },[])
    
  return (
      <div className="min-h-screen flex flex-col">
        <div>
            <Navbar/>
        </div>

         <div>
         <Filter filterData ={filterData}/>
         </div>

         <div className="w-11/12 max-w-[1200px] mx-auto flex justify-center items-center min-h-[50vh]">
          {
            loading ?(<Spinner/>) :(<Cards courses={courses}/>)
          }
        </div>
      </div>

  );
};

export default App;
