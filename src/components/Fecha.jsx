import React from 'react'

function fecha({fechat}) {

    let diasSemana = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let meses = [
      "jan",
      "feb",
      "mar",
      "apr",
      "may",
      "jun",
      "jul",
      "aug",
      "sep",
      "oct",
      "nov",
      "dec",
    ];
    let fecha= new Date(fechat);
    let diaSemana=diasSemana[fecha.getDay()];
    let dia= fecha.getDate()
    let mes = meses[fecha.getMonth()]
    
    

    


  return (
    <p> Today {diaSemana} {dia} {mes}</p>
  )
}

export default fecha