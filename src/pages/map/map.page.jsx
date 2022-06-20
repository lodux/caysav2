import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import dati from './data';

const MapPage = () => {
  const {via}=useParams();
  const [data,setDati]=useState([]);

  useEffect(() => {
   switch(via) {
    case "ven":
      setDati(dati[0]);
    break;
    case "vfp":
      setDati(dati[1]);
    break;
    case "vsc":
      setDati(dati[2]);
    break;
    case "ci":
      setDati(dati[3]);
    break;
    case "vmpd":
      setDati(dati[4]);
    break;
    case "valp":
      setDati(dati[5]);
    break;
    case "vn":
      setDati(dati[6]);
    break;
    case "cu":
      setDati(dati[7]);
    break;
    case "vmdr":
      setDati(dati[8]);
    break;
    default:
      return
   }
  

  },[])

  return (
    <div>
      {data.name}
    </div>
  )
}

export default MapPage