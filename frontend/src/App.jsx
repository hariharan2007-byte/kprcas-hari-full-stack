import React from 'react'
import Parent from './pages/Parent'
import State from './pages/State'
import Navbar from './pages/Navbar'
import {Routes,Route} from 'react-router-dom'
const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Parent/>}></Route>
      <Route path='/useState' element={<State/>}/>
    </Routes>
    
    </>
  
)
}

export default App
