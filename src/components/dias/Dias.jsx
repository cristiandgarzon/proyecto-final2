import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import "./Dias.css";

import { CardActionArea } from "@mui/material";
import Fecha from "../Fecha";
import Clear from "../../assets/Clear.png";
import Logos from "../logos/Logos";

function Dias({ arrdays }) {
  const diasb = arrdays;
  const today = new Date();

  const firstDay = diasb.reduce((acc, dia) => {
    const fecha = dia.dt_txt.split(" ")[0];

    if (!acc.some((item) => item.dt_txt.split(" ")[0] === fecha)) {
      acc.push(dia);
    }

    return acc;
  }, []);

  

  return (
    <>
      {firstDay.map((x, index) => {
        const fecha=new Date (x.dt_txt)
        const isToday= fecha.toDateString()=== today.toDateString()

        if (!isToday){

          return(
            <Card id="cardday" sx={{ maxWidth: 170 }} key={index}>
          <CardActionArea>
            <div className="fecha">
              <Fecha fechat={x.dt_txt} p={false} width={50} />
            </div>

            <CardContent>
              <div className="logoContainer">
                <Logos textoLogo={x.weather[0].main} tamaño={false} />
              </div>
              <div>
                <p className="pTemps">
                  {Math.floor(x.main.temp_max)} ºC{" "}
                  <small className="PsTe">
                    {Math.floor(x.main.temp_min)}ºC
                  </small>
                </p>
              </div>
            </CardContent>
          </CardActionArea>
        </Card>
          );
          
          
        } 
        
      return null;

        

  })}
    </>
  );
}

export default Dias;
