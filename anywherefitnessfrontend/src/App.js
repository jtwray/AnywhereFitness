import React,{useState} from 'react';
import {Route} from 'react-router-dom'

import './App.css';
import {Instructor} from './Instructor/Instructor';

function App() {


  return (
    <div className="App">
      <Route path="/instructor" component={Instructor}/>
    </div>
  );
}

export default App;
