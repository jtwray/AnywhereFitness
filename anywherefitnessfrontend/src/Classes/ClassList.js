import React, {useState,useEffect} from 'react'
import Axios from 'axios';
import {FormCreateClass} from "./FormCreateClass"
import {Class} from "./Class"

export const ClassList=( {classList, setClassList, instructor}, props ) => {

    const instructorID=instructor.id;
    useEffect( () => { 
        const getClasses=() => {
            const apiurl=`https://lambda-anywhere-fitness.herokuapp.com/api/auth`;
            let responseData;
            axiosWithAuth().get( `/${instructorID}` )
                .then( ( response ) => {responseData=response.data} )
                .then( () => {console.log( responseData )} )
                .then( () => {setClassList( responseData )} )
                .catch( error => console.error( 'Server Error', error ) );

        }
        return getClasses();

    }, [instructorId] )
    return (
        <>
            <FormCreateClass classList={classList} setClassList={setClassList}/>
            {classList&&classList.map( cls =><Class class={cls} />)}

        </>
    )
}