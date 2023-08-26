import * as React from 'react';
import "./Logos.css"


import Clear from "../../assets/Clear.png"
import Hail from "../../assets/Hail.png"
import HeavyCloud from "../../assets/HeavyCloud.png"
import HeavyRain from "../../assets/HeavyRain.png"
import LightCloud from "../../assets/LightCloud.png"
import LightRain from "../../assets/LightRain.png"
import Shower from "../../assets/Shower.png"
import Sleet from "../../assets/Sleet.png"
import Snow from "../../assets/Snow.png"
import Thunderstorm from "../../assets/Thunderstorm.png"




function Logos({textoLogo,tamaño}) {

  return (
    <div>
        {textoLogo=="Clear"&&<img className={tamaño?"normal":"pequeño"} src={Clear} alt="" />}
        {textoLogo=="Hail"&&<img className={tamaño?"normal":"pequeño"} src={Hail} alt="" />}
        {textoLogo=="Clouds"&&<img className={tamaño?"normal":"pequeño"} src={HeavyCloud} alt="" />}
        {textoLogo=="Rain"&&<img className={tamaño?"normal":"pequeño"} src={HeavyRain} alt="" />}
        {textoLogo=="Haze"&&<img className={tamaño?"normal":"pequeño"} src={LightCloud} alt="" />}
        {textoLogo=="Light Rain"&&<img className={tamaño?"normal":"pequeño"} src={LightRain} alt="" />}
        {textoLogo=="Shower"&&<img className={tamaño?"normal":"pequeño"} src={Shower} alt="" />}
        {textoLogo=="Sleet"&&<img className={tamaño?"normal":"pequeño"} src={Sleet} alt="" />}
        {textoLogo=="Snow"&&<img className={tamaño?"normal":"pequeño"} src={Snow} alt="" />}
        {textoLogo=="Thunderstorm"&&<img className={tamaño?"normal":"pequeño"} src={Thunderstorm} alt="" />}   
    </div>

    
    
  )
}

export default Logos