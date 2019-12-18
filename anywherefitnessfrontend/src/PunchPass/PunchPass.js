import React,{useState,useEffect} from 'react'

export  const PunchPass=(props)=>{

const initialPass= {classname:"",punches:"",client:"",instructor:""}
const [passes, setPunchPasses]=useState(initialPass)





    return(
        <>
        <PunchPass class={props.class}/>
        </>
    )
}
