import React, { useState } from 'react'

const State = () => {
    const [count,setCount] = useState(0)
  return (
    <div>
        <p>Count : {count}</p>
        <button onClick={()=>{setCount(count+1)}}>increment</button>
    </div>

  )
}

export default State