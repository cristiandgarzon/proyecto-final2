import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import Dias from "./components/dias/Dias";
import Fecha from "./components/Fecha";

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

    console.log(ciudad);
  };

  useEffect(() => {
    if (Object.keys(climaDiario).length == 0) {
      obtenerclima();
    }
  }, [climaDiario]);

 console.log(climaDiario)

  /* useEffect(() => {
    fetchData(ciudad);

    async function fetchData(ciudad) {
      setLoading(true)
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=` +
          ciudad +
          `&cnt=5&appid=38df1ecf822c2924dd83001576656363&units=metric `
      )
     
      console.log("responde", loading)
      setClimaDiario({res})
      console.log("clima diario", climaDiario)
      setLoading(false)
      setDiasa(climaDiario.list)

      // console.log(climaDiario)
    }
  }, [ciudad]); */

  // const diasa=climaDiario.list
  //console.log(climaDiario);
  //let fecha= new Date(climaDiario.list[0].dt_txt)

  return (
    <>
      <input
        type="text"
        placeholder="Search For places"
        onChange={(e) => setBuscar(e.target.value)}
      />

      <button className="material-symbols-outlined" onClick={handleClick}>
        my_location
      </button>

      {climaDiario ? (
        climaDiario.list && (
          <div className="appcontainer">
            <aside>
              <div className="searchbarcontainer"></div>
              <h1>{Math.floor(climaDiario.list[0].main.temp)+`ºc`}</h1>
              <h3>{climaDiario.list[0].weather[0].description}</h3>
              <Fecha fechat={climaDiario.list[0].dt_txt}/>
              <p>{climaDiario.city.name}</p>

              <section>
                <img src="" alt="" />
              </section>
            </aside>

            <main>
              <Dias arrdays={climaDiario.list} />
            </main>
          </div>
        )
      ) : (
        <h1>Cargando...</h1>
      )}
    </>
  );
}

export default App;
