import { useState } from 'react'
import Authenticate from './components/Authenticate'
import SignUpForm from './components/SignUpForm'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [token, settoken] = useState(null)

  return (
    <>


    <SignUpForm 
    token={token}
    settoken={settoken}
    />



    <Authenticate 
      token={token}
      settoken={settoken}
    />

      
    </>
  )
}

export default App
