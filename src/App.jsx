import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import VendingMachine from './components/VendingMachine'
import Candy from './components/Candy';
import Chips from './components/Chips';
import Cookies from './components/Cookies';

function App() {
    return (
    <div>
      <BrowserRouter>
        <VendingMachine />
        <Routes>
          <Route path='/candy' element={<Candy />}/>
          <Route path='/chips' element={<Chips />}/>
          <Route path='/cookies' element={<Cookies />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
