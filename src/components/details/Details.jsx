import React, { useEffect, useState } from "react";
import Slider from '@mui/joy/Slider';
import Box from '@mui/joy/Box';
import "./Details.css"





function Details({ todaydetails, wind, humidity, visibility, airP }) {
  const today = { todaydetails };
  

  let id = new Date().getTime();
  <style>
  {`
  .material-symbols-outlined {
      font-variation-settings:
      'FILL' 0,
      'wght' 400,
      'GRAD' ${today.todaydetails.wind.deg},
      'opsz' 24
    }
  `}
</style>

  
  

  //determinar direccion del viento
  let grados= today.todaydetails.wind.deg
  
  const getWindDirection=(grados) =>{
    const directions = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
    const index = Math.round((grados % 360) / 22.5 %16);
    return directions[index]

  }
 const windDirection= getWindDirection(grados)
//determinar la humedad
 const marks = [
    {
      value: 0,
      label: '0%',
    },
    
    {
      value: 50,
      label: '50%',
    },
    {
      value: 100,
      label: '100%',
    },
  ];

  function valueText(value) {
    return `${value}%`;
  }

const temp=today.todaydetails.main.humidity

//determinar la visibilidad
const[metros,setMetros]=useState(0);
const[millas,setMillas]=useState(0);

const data= today.todaydetails.visibility



useEffect(() => {
  const millasConversion = data/ 1609.34; // 1 metro equivale a 0.000621371 millas
  setMetros(data);
  setMillas(millasConversion.toFixed(1));
}, []);
// determinar la presion de aire
 

 

  
 // let temp=(today.todaydetails.main.humidity)
  




  return (
    <>
      {/*primer componente wind velocidad y direccion*/}
      {wind == true && (
        <div className="carddetail">
          <p>Wind status</p>
          <p className="textoDetails">{Math.floor(today.todaydetails.wind.speed)} MPH</p>
          <Box sx={{ width: 300,padding:"1.5rem", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <span className="material-symbols-outlined">
          assistant_navigation
         </span>{"  · "}{windDirection}

          </Box>

        </div>
      )}
      {humidity==true&&(
        <div className="carddetail">
            <p>Humidity</p>
            <p className="textoDetails">{today.todaydetails.main.humidity}%</p>
            <Box sx={{ width: 300, padding:"1.5rem", display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Slider 
            
            value={temp}
            
            aria-label="Custom marks"
            getAriaValueText={valueText}
            step={10}
            valueLabelDisplay="auto"
            marks={marks}
            
            
            
            />
                
          </Box>
           
            
           
            
        </div>
      )}
      {visibility==true&&(
        <div className="detailsP">
            <p>Visibility</p>
            <p className="textoDetails">{millas} Miles</p>
            

        </div>
      )}
      {airP==true&&(
        <div className="detailsP">
            <p>Air Pressure</p>
            <p className="textoDetails">{today.todaydetails.main.pressure} mb</p>
            
        </div>
      )}
    </>
  );
}

export default Details;
