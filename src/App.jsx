import { useState } from 'react'
import './App.css'
import '../css/styles.css'
import { Link, BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/main/secondary/Navbar'


function App() {
  const [count, setCount] = useState(0)

  let [text, settext] = useState("hola")

  const handleClick = () => {
    setCount(count + 1);
    settext(text == "hola" ? text = "adios" : text = "hola");
  }
  
  return (
    <>
      <BrowserRouter>

        <Navbar />
        

      </BrowserRouter>
    </>


  )
}

export default App
