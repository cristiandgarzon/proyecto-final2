import React from 'react'

function Dias({arrdays}) {


const diasb=arrdays






  return (
    <>
    <ul>
       {diasb.map((x,index)=>(
            <li key={index}>{x.weather[0].main}
            <p>{x.main.temp+`ºc`}</p>
            
            </li>
            
      ))}
    </ul>
    
    </>
  )
}

export default Dias