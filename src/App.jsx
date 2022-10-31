import React, { useState } from 'react'
import Pais from './Pais'
import IlmaInfo from './IlmaInfo'
import './App.css'
import IlmaEnnustus from './IlmaEnnustus'


function App() {

  return (
    <div className="taust">
      <div className="App">
        <Pais />
        <IlmaInfo />
      </div>
    </div>
  )
}

export default App