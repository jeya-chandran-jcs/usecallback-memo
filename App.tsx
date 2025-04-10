import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseCallBack from './Hooks/UseCallBack'
import UseMemo from './Hooks/UseMemo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UseCallBack />
      <UseMemo />
    </>
  )
}

export default App
