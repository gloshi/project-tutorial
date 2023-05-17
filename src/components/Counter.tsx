import React, { useState } from 'react'
import classes  from './Counter.module.scss'

const Counter = () => {

    const [count,setCount] = useState(0)

    const increment = () => {
        setCount(count => count + 1)
    }

  return (
    <div>
        <button className={classes.btn} onClick={increment}>
            increment
        </button>
        <div>
            {count}
        </div>
    </div>
  )
}

export default Counter