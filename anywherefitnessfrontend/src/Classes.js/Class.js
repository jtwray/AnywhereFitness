import React,{useState,useEffect} from 'react'

export  const Class=(props,{classes,setClasses})=>{

const initialClass= 
const [props.classes, props.setClasses]=useState(initialClass)





    return(
        <>
        <ClassCard class={class}/>
        </>
    )
}
