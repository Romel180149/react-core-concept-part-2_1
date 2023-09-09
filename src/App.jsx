import { useState } from 'react'

import './App.css'
import Posts from './posts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  
      <h1>React core concept recap</h1>
      <ol>
        <li>Components</li>
        <li>JSX</li>
        <li>Props</li>
        <li>Event handler</li>
        <li>State</li>
        <li>Load data</li>
      </ol>
      <hr />
      <Posts></Posts>
   
    </>
  )
}

export default App
