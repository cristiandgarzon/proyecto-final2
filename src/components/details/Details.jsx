import React from "react";
import Slider from '@mui/joy/Slider';
import Box from '@mui/joy/Box';




function Details({ todaydetails, wind, humidity, visibility, airP }) {
  const today = { todaydetails };
  console.log(today);

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
  console.log(grados)
  const getWindDirection=(grados) =>{
    const directions = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
    const index = Math.round((grados % 360) / 22.5 %16);
    return directions[index]

  }
 const windDirection= getWindDirection(grados)

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


 

  
 let temp=(today.todaydetails.main.humidity)
  console.log(temp)




  return (
    <>
      {/*primer componente wind velocidad y direccion*/}
      {wind == true && (
        <div>
          <h3>Wind status</h3>
          <p>{Math.floor(today.todaydetails.wind.speed)} MPH</p>
          <p><span class="material-symbols-outlined">
          assistant_navigation
         </span>{windDirection}</p>

        </div>
      )}
      {humidity==true&&(
        <div>
            <h3>Humidity</h3>
            <p>{today.todaydetails.main.humidity}%</p>
            <Box sx={{ width: 300 }}>
            <Slider 
            
            
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
        <div>
            <h3>Visibility</h3>
        </div>
      )}
      {airP==true&&(
        <div>
            <h3>Air Pressure</h3>
        </div>
      )}
    </>
  );
}

export default Details;
