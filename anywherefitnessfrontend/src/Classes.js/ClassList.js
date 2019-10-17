import React,{useState,useEffect} from 'react';
import Axios from 'axios';

export default function ClassList =(props,{classes,setClasses})=>{
    
    const instructorID=props.instructor.id;
    useEffect(()=>{
        const getClasses=()=>{
            const apiurl=`mockdata`;
            let responseData;
            Axios.get(`${apiurl}${instructorID}`)
            .then((response)=>{responseData=response.data})
            .then(()=>{console.log(responseData)})
            .then(()=>{setClasses(responseData)})
            .catch(error=> console.error('Server Error',error));

        }
        return getClasses();

    },[instructorID])
}