import { useState } from "react";
import React from "react";
import axios from "axios";

import "./App.css";

function App() {
  

  const[climaDiario,setClimaDiario]=useState("")
  const[ciudad,setCiudad]=useState("helsinki")

  //api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}

  const obtenerClima= ()=>{axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=`+(ciudad)+`&appid=38df1ecf822c2924dd83001576656363`)

      .then(function(response){

      setClimaDiario(response.data)

    })
    .catch(function(error){
      console.log(error)
    })
    .finally(function(){}) 
  };
  console.log(ciudad)
  console.log(climaDiario)

  return (
    <>
      <div className="appcontainer">
        <aside>
          <div className="searchbarcontainer">
            <input type="text" placeholder="Search For places"
             onChange={(e)=>setCiudad(e.target.value)} />

             <button className="material-symbols-outlined"
             onClick={obtenerClima}
             >my_location </button>

             <p>{JSON.stringify(climaDiario.list[0].weather[0].main
              )}</p>

            
          </div>
          <section>
          <p>{JSON.stringify(climaDiario.list[0].weather[0].main
              )}</p>
            <img src="" alt="" />
          </section>
        </aside>
      </div>
    </>
  );
}

export default App;
