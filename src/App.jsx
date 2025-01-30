import { useState } from 'react'
import Flames from './components/flames'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Flames />
    </>
  )
}

export default App
