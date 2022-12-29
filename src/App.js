import React, { createContext } from 'react'
import Comone from './components/Comone'

const Name = createContext()
const lastName = createContext()
function App() {
  return (
    <div>
      <h1>
        <Name.Provider value={"usman"}>
        <lastName.Provider value={"khan"}>
        <Comone/>
        </lastName.Provider>
        </Name.Provider>
        
      </h1>
    </div>
  )
}

export default App
export {Name , lastName};