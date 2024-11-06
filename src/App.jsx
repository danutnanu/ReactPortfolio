import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div>
        <button className="btn btn-primary bg-dark text-white">Primary Button</button>
      </div>
    </>
  )
}

export default App
