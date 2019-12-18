import React from 'react'
import {NavLink, Route} from 'react-router-dom'
import {PunchPass} from './../PunchPass/PunchPass';
import {ClassList} from './../Classes/ClassList'


export const InstructorCard=( {instructor,classList,setClassList} ) => {

    return (
        <div className="instructorCard" key={instructor.id}>
            <nav>
                <NavLink to={`/instructor/${instructor.id}/PunchPass`}>PunchPass</NavLink>
                <NavLink to={`/instructor/${instructor.id}/ClassList`}>ClassList</NavLink>
            </nav>

            <Route path="/instructor/:instructorID/PunchPass" render={props => <PunchPass instructor={instructor} {...props} />} />
            <Route path="/instructor/:instructorID/ClassList" render={props => <ClassList instructor={instructor} classList={classList} setClassList={setClassList} {...props} />} />
        </div>
    )
} 