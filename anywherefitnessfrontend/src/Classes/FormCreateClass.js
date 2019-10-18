import React, {useState} from 'react'
export const FormCreateClass=( {classList, setClassList} ) => {
    const initialClassFields={name: "", type: "", startTime: "", duration: "", level: "",location:"", registrants: ""}
    const [newClass, setNewClass]=useState( initialClassFields );
    const handleSubmit=event => {
        event.preventDefault();
        ( !newClass.value )? alert( "Please fill in all fields" ):setClassList( [newClass, ...classList] );
        resetForm();
    }

    const handleChange=( event ) => {
        setNewClass( {...newClass, [event.target.name]: event.targe.value} );
    }
    const resetForm=() => {
        setNewClass( initialClassFields );
    }
    return(
        <>

<form onSubmit={handleSubmit}>
    <input type="text"
    name="name"
    placeholder="Class Name"
    onChange={handleChange}
    value={newClass.name}/>

    <input type="text"
    name="type"
    placeholder="Class type"
    onChange={handleChange}
    value={newClass.type}/>

    <input type="text"
    name="startTime"
    placeholder="Class startTime"
    onChange={handleChange}
    value={newClass.startTime}/>

    <input type="text"
    name="duration"
    placeholder="Class duration"
    onChange={handleChange}
    value={newClass.duration}/>

    <input type="text"
    name="intensityLevel"
    placeholder="Class intensityLevel"
    onChange={handleChange}
    value={newClass.intensityLevel}/>

    <input type="text"
    name="location"
    placeholder="Class location"
    onChange={handleChange}
    value={newClass.location}/>

    <input type="text"
    name="registrants"
    placeholder="Class registrants"
    onChange={handleChange}
    value={newClass.registrants}/>
    <button type="submit">Submit</button>

</form>

        </>
    )

}