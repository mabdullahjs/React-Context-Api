import React, { useContext } from 'react'
import { Name , lastName } from '../App'

function Comthree() {
    const FullName = useContext(Name)
    const LastName = useContext(lastName)
  return (
    <div>
        <h1>{`${FullName} ${LastName}`}</h1>
    </div>
  )
}

export default Comthree