import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import "./Dias.css"


import { CardActionArea } from "@mui/material";
import Fecha from "../Fecha";
import Clear from "../../assets/Clear.png"
import Logos from "../logos/Logos";


function Dias({ arrdays }) {
  const diasb = arrdays;
  console.log(diasb)

  const firstDay = diasb.reduce((acc, dia) => {
    const fecha = dia.dt_txt.split(" ")[0];

    if (!acc.some((item) => item.dt_txt.split(" ")[0] === fecha)) {
      acc.push(dia);
    }

    return acc;
    
  }, []);

  

  return (
    <>
      {/*  <ul>
        {firstDay.map((x, index) => (
          <li key={index}>
            <h3>{x.dt_txt}</h3>
            {x.weather[0].main}
            <p>{Math.floor(x.main.temp) + `ºc`}</p>
          </li>
        ))}
      </ul> */}

      <>
        {firstDay.map((x, index) => (
          <Card id="cardday" sx={{ maxWidth: 170 }} key={index}>
            <CardActionArea>
              <div className="fecha">
              <Fecha 
              fechat={x.dt_txt}
              width={50}
              />
              </div>
             

              <CardContent>
                <div className="logoContainer">
                <Logos
                textoLogo={x.weather[0].main}
                tamaño={false}
                />
                </div>
                
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </>
    </>
  );
}

export default Dias;
