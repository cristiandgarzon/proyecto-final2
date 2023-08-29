import React from 'react';

function Fecha({ fechat, p }) {
  const diasSemana = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const meses = [
    "jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"
  ];
  
  const fecha = new Date(fechat,);
  const diaSemana = diasSemana[fecha.getDay()];
  const dia = fecha.getDate();
  const mes = meses[fecha.getMonth()];
  
  const hoy = new Date();
  const esHoy = fecha.toDateString() === hoy.toDateString();
  const esMañana = fecha.toDateString() === new Date(hoy.getTime() + 24 * 60 * 60 * 1000).toDateString();

  const puntuacion = p ? " · ": ",";

  let diaTexto;
  if (esHoy) {
    diaTexto = "Today";
  } else if (esMañana) {
    diaTexto = "Tomorrow";
  } else {
    diaTexto = diaSemana;
  }

  return (
    <p className={p ? "fechas":""} >{diaTexto === "Today"? "Today" : diaTexto}{puntuacion} {dia} {mes}</p>
  );
}

export default Fecha;
