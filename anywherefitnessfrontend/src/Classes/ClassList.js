import React, {useEffect} from 'react'
import Axios from 'axios';
import {FormCreateClass} from "./FormCreateClass"
export const ClassList=( {classList, setClassList,instructor}, props ) => {

    const instructorID=instructor.id;
    useEffect( () => {
        const getClasses=() => {
            const apiurl=`mockdata`;
            let responseData;
            Axios.get( `${apiurl}${instructorID}` )
                .then( ( response ) => {responseData=response.data} )
                .then( () => {console.log( responseData )} )
                .then( () => {setClassList( responseData )} )
                .catch( error => console.error( 'Server Error', error ) );

        }
        return getClasses();

    }, [instructorID] )
    return (
        <>
            <FormCreateClass />
            <ClassList />
        </>
    )
}