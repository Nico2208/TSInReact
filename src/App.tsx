import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Button backgroundColor='blue' fontSize={30}/>
    </>
  )
}

export default App
