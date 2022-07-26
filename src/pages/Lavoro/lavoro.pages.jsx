import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import jobData from './jobData';
import './lavoro.styles.scss';

export default function Lavoro() {
    const {job}=useParams();
    const [data,setDati]=useState([]);

    useEffect(() => {
        switch(job) {
         case "postino":
           setDati(jobData[0])
         break;
         default:
           return
        }
    },[job]);

  return (
    <div>{data.banner}</div>
  )
}
