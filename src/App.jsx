import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import PriceList from './components/PriceList/PriceList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar></Navbar>
    <h1 className='text-5xl text-purple-600 my-2 text-center'>Hello From Tailwind</h1>
     <PriceList></PriceList>
      
    </>
  )
}

export default App
