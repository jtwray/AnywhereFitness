import React from "react"
import {Link,Route} from "react-router-dom"
import {Dashboard} from "./Dashboard"
import {FormCreateClass} from './Classes/FormCreateClass';
import {ClassList} from './Classes/ClassList';
import {Instructor} from './Instructor/Instructor';

export const  Nav =()=>{

    return(
        <>
<Link to='/'>DashBoard</Link>
<Link to='/instructor'>Instructor</Link>
<Link to='/classlist/createclass'>create class</Link>


<Route exact path="/" component={Dashboard}/>
<Route exact path="/classlist/createclass" component={FormCreateClass}/>
        </>
    )
}