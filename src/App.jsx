import { useState } from 'react'
import Header from './components/Header'
import style from './App.module.css'
import Homepage from './pages/Homepage'

function App() {

  return (
    <div className={style.container}>
      <Homepage/>
    </div>
  )
}

export default App
