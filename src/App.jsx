import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import Dias from "./components/dias/Dias";
import Fecha from "./components/Fecha";
import Logos from "./components/logos/Logos";
import Cloudbackground from "./assets/Cloud-background.png";
import Details from "./components/details/Details";
import { Drawer } from "@mui/material";
import Button from '@mui/material/Button';


import "./App.css";


function App() {
  const [climaDiario, setClimaDiario] = useState({});
  const [buscar, setBuscar] = useState("");
  const [ciudad, setCiudad] = useState("helsinki");

  const obtenerclima = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=` +
          ciudad +
          `&cnt=40&appid=38df1ecf822c2924dd83001576656363&units=metric`
      )
      .then(function (response) {
        setClimaDiario(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {});
  };

  const handleClick = function () {
    setCiudad(buscar);
    obtenerclima();
    
  };

  useEffect(() => {
    if (Object.keys(climaDiario).length == 0) {
      obtenerclima();
    }
  }, [climaDiario]);

  
  
  


  return (
    <>
      <div className="appcontainer">
        {climaDiario ? (
          climaDiario.list && (
            <>
              <div className="contenedorGeneral">
                <aside id="aside2">
                  <div className="searchbarcontainer">
                    <input
                      type="text"
                      placeholder="Search For places"
                      onChange={(e) => setBuscar(e.target.value)}
                    />
                    <button
                      id="botonSearch" className="material-symbols-outlined"
                      onClick={handleClick}
                    >
                      my_location
                    </button>
                    <Drawer/>
                    
                  </div>

                  <div className="infodia">
                    <div className="logocontainer">
                      <Logos
                        textoLogo={climaDiario.list[0].weather[0].main}
                        tamaño={true}
                      />
                      <img
                        className="imagen-absoluta"
                        src={Cloudbackground}
                        alt=""
                      />
                    </div>

                    <p className="temperatura">
                      {Math.floor(climaDiario.list[0].main.temp)}
                      <small className="grados">ºC</small>
                    </p>
                    <div className="asideBotton">
                    <h2 className="climatx">
                      {climaDiario.list[0].weather[0].main}
                    </h2>
                    <Fecha fechat={climaDiario.list[0].dt_txt} p={true} />
                    <p className="location">
                      <span className="material-symbols-outlined">location_on</span>
                      {"  "+climaDiario.city.name}
                    </p>

                    </div>
                    
                  </div>
                </aside>

                <main>
                  <div className="cardsContainer">
                  <Dias arrdays={climaDiario.list} />
                  </div>

                <h3> {" ·"}{"closest date Details"}</h3>

                <div className="detailsContainer">

                 <Details
                  todaydetails={climaDiario.list[0]}
                  wind={true}
                  />
                  <Details
                  todaydetails={climaDiario.list[0]}
                  humidity={true}
                  />
                  <Details
                  todaydetails={climaDiario.list[0]}
                  visibility={true}
                  />
                  <Details
                  todaydetails={climaDiario.list[0]}
                  airP={true}
                  />
                   </div>
                  
                </main>
                
                
              </div>
            </>
          )
        ) : (
          <h1>Cargando...</h1>
        )}
      </div>
    </>
  );
}

export default App;
