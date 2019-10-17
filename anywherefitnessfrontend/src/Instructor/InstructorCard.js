import React from 'react'
import {NavLink, Route, Link} from 'react-router-dom'
import PunchCards from './PunchCards'
import Classes from './Classes'

const InstructorCard=( {instructor} ) => {

    return (
        <div className="instructorCard" key={instructor.id}>
            <nav>
                <NavLink to={`/instructor/${instructor.id}/PunchCards`}>PunchCards</NavLink>
                <NavLink to={`/instructor/${instructor.id}/Classes`}>Classes</NavLink>
            </nav>

            <Route path="/instructor/:instructorID/PunchCards" render={props => <PunchCards instructor={instructor} {...props} />} />
            <Route path="/instructor/:instructorID/Classes" render={props => <Classes instructor={instructor}{...props} />} />
        </div>
    )
}