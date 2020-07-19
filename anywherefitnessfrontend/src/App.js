import React,{useState} from 'react';
import {Route} from 'react-router-dom'
import {Nav} from './Nav'
import './App.css';
import {Instructor} from './Instructor/Instructor';

function App() {


  return (
    <div className="App">
     <Nav/>
      <Route exact path="/instructor" component={Instructor}/>
    </div>
  );
}

export default App;
