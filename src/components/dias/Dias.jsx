import React from 'react'

function Dias({arrdays}) {


const diasb=arrdays

const firstDay = diasb.reduce((acc, dia) => {
  const fecha = dia.dt_txt.split(' ')[0];

  if (!acc.some(item => item.dt_txt.split(' ')[0] === fecha)) {
    acc.push(dia);
  }

  return acc;
}, []);








return (
  <>
  <ul>
     {firstDay.map((x,index)=>(
          
          <li key={index}>
          <h3>{x.dt_txt}</h3>  
          {x.weather[0].main}
          <p>{Math.floor(x.main.temp)+`ºc`}</p>

          
          </li>
          
    ))}
  </ul>
  
  </>
)



}

export default Dias