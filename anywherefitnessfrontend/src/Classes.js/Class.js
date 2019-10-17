import React,{useState,useEffect} from 'react'

export  const Class=()=>{

const initialClass=[{name:"",type:"",startTime:"", duration:"",level:"",registrants:""},]
const [classes, setClasses]=useState(initialClass)





    return(
        <>
        <ClassCard class={class}/>
        </>
    )
}
